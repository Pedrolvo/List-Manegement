module.exports = (sequelize, Datatypes) => {
  const Task = sequelize.define('Task', {
    describe: Datatypes.TEXT,
    listId: Datatypes.INTEGER,
  }, { timestamps: false, tableName: 'tasks' });

  Task.associate = (models) => {
    Task.belongsTo(models.List, { foreignKey: 'listId' });
  }
  return Task;
}
