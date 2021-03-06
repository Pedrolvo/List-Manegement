module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    listName: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'lists' });

  List.associate = (models) => {
    List.hasMany(models.Task, { foreignKey: 'listId' });

    List.belongsTo(models.User, { foreignKey: 'userId' });
  }

  return List;
}
