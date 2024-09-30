const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/post/:id/comment", withAuth, async (req, res) => {
  try{
    if (req.session.user_id && req.body.body) {
      const newComment = await Comments.create({
        body: req.body.body,
        post_id: req.params.id,
        user_id: req.session.user_id,
      });

      console.log(newComment);
      res.redirect(`/post/${req.params.id}`);
    } else {
      res.status(400).json({ message: 'Please enter content for your comment.' });
    }
  } catch (err) {
    res.status(500).json(err);
    console.error(err.message);
  }
});

module.exports = router;
