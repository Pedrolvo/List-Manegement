module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, { timestamps: false, tableName: 'users' });

  User.associate = (models) => {
    User.hasMany(models.List, { foreignKey: 'userId' })
  }
  return User;
};