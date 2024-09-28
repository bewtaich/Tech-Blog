const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Posts extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Posts.init(
  {
    title:{
      type:DataTypes.STRING,
      allowNull:false
    },
    body:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      unique: false, 
      references: {
        model: 'user',
        key: 'id',
      },},

    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Posts', 
  }
);

module.exports = Posts;