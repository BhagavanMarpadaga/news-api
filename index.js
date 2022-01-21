const express=require('express');
const port=8000;
const app=express();

// app.get('/',function(req,res){

//     res.send('good');
// })

app.use('/',require('./routes'));

app.listen(port,function(err)
{
    if(err)
    {
        console.log('error while firing server',err);
        return;
    }
    console.log('app running on port',port);
})