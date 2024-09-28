const router = require('express').Router();
const { Posts } = require('../../models');

router.post('/', async (req,res)=>{
    try {
        const newPost = await Posts.create({
          title: req.body.title,
          content: req.body.content,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newPost);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports=router;