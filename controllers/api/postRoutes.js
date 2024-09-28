const router = require('express').Router;
const { Post } = require('../../models');

router.post('/', async (req,res)=>{
    res.render('homepage')
});

module.exports=router;