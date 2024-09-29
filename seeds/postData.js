const { Post } = require('../models');

const postData = [
  {
    title: 'Post 1',
    body: 'Post 1 Body',
    user_id: 1, 
  },
  {
    title: 'Post 2',
    body: 'Post 2 Body',
    user_id: 2,
  },
  {
    title: 'Post 3',
    body: 'Post 3 Body',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
