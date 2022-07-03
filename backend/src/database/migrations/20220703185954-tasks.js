'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'tasks', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        describe: {
          type: Sequelize.TEXT
        },
        listId: {
          type: Sequelize.INTEGER,
          references: {
            model: "lists",
            key: "id",
          }
        },
      });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};