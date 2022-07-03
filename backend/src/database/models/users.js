'use strict';
const { Model } = require('sequelize');
const lists = require('./lists');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {}
  users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });

  users.hasMany(lists, {
    foreignKey: 'userId'
  })

  return users;
};