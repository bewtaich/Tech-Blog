const { Post } = require('../models');

const postData = [
  {
    title: 'Post 1',
    content: 'Post 1 Body',
    user_id: 1, 
  },
  {
    title: 'Post 2',
    content: 'Post 2 Body',
    user_id: 2,
  },
  {
    title: 'Post 3',
    content: 'Post 3 Body',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
