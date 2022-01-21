const dotenv = require('dotenv').config();
const fetch = require('isomorphic-fetch');

module.exports.getNews =function (req, res) {
    
    console.log(process.env.API_KEY);
    fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.API_KEY}`)
        .then(response => response.json())
        .then(data => {
            let results = data.results;
            //console.log('results',results);
            let i=0;
            let newsJson=[];
            while(i<5)
            {
                let newObj = {};
                newObj['title'] = results[i].title;
                newObj['url'] = results[i].url;
                newsJson.push(newObj);
                i++;
            }
            return res.status(200).json({
                message: 'Latest news',
                LatestNews:newsJson

            })
        }).catch(err => {
            return res.status(500).json({
                message: 'Internal server error'
            })
        })
}
