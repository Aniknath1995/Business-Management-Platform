module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
  });

  User.associate = models => {
    User.belongsTo(models.Role, { foreignKey: 'role_id' });
  };

  return User;
};
