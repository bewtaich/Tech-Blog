const router = require('express').Router;
const { Comment } = require('../../models');

router.post('/', async (req,res)=>{
    res.send('test')
});

module.exports=router;