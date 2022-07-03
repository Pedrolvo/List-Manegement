'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'lists', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        listName: {
          type: Sequelize.STRING
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: "users",
            key: "id"
          }
        },
      });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('lists');
  }
};
