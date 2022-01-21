const express=require('express');
const router=express.Router();


const newsController=require('../controller/news_controller');
router.get('/api/getNews',newsController.getNews);

module.exports=router;