'use strict';
const { Model } = require('sequelize');
const tasks = require('./tasks');

module.exports = (sequelize, DataTypes) => {
  class lists extends Model {}

  lists.init({
    listName: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'lists',
    timesstamps: false,
  })

  lists.hasMany(tasks, {
    foreignKey: 'listId'
  })

  return lists;
}