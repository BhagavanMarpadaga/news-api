const express=require('express');
const app=express();
const dotenv=require('dotenv').config();

// app.get('/',function(req,res){

//     res.send('good');
// })

app.use('/',require('./routes'));

app.listen(process.env.PORT || 5000,function(err)
{
    if(err)
    {
        console.log('error while firing server',err);
        return;
    }
    
})