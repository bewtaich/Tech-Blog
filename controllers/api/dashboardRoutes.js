const router = require("express").Router();
const { Posts } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/dashboard/create-post", withAuth, async (req, res) => {
    try {
      if (req.session.user_id && req.body.title && req.body.body) {
        const newPost = await Post.create({
          title: req.body.title,
          body: req.body.body,
          user_id: req.session.user_id,
        });
  
        res.redirect("/dashboard");
      } else {
        res
          .status(400)
          .json({ message: "Please provide both a title and content." });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  
  module.exports=router;