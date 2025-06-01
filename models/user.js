'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Token)
      User.hasMany(models.Review, {foreignKey: "id_user"})
      // User.hasMany(models.Order)
    }
  }
  User.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN,
    adress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};