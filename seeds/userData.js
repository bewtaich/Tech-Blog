const { User } = require("../models");

const userData = [
  {
    username: "JohnDoe",
    password: "password123",
  },
  {
    username: "JaneSmith",
    password: "password456",
  },
  {
    username: "AliceWonder",
    password: "password789",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
