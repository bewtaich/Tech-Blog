const User = require("./User");
const Posts = require("./Post");
const Comments = require("./Comment");

User.hasMany(Posts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Posts.belongsTo(User, {
  foreignKey: "user_id",
});

Posts.hasMany(Comments, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Posts, {
  foreignKey: "blog_id",
});

User.hasMany(Comments, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Posts, Comments };
