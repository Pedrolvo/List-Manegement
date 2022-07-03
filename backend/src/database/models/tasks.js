'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, Datatypes) => {
  class tasks extends Model {}

  tasks.init({
    describe: Datatypes.TEXT,
    listId: Datatypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tasks',
    timestamps: false,
  })
  return tasks;
}