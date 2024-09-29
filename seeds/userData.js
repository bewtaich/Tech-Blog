const { User } = require('../models');

const userData = [
  {
    username: 'JohnDoe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    username: 'JaneSmith',
    email: 'jane@example.com',
    password: 'password456',
  },
  {
    username: 'AliceWonder',
    email: 'alice@example.com',
    password: 'password789',
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
