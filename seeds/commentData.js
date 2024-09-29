const { Comments } = require("../models");

const commentData = [
  {
    body: "Comment 1",
    user_id: 2,
    post_id: 1,
  },
  {
    body: "Comment 2",
    user_id: 1,
    post_id: 2,
  },
  {
    body: "Comment 3",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
