"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Token);
      User.hasMany(models.Review, { foreignKey: "id_user" });
      User.hasMany(models.Order, { foreignKey: "id_user" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "Por favor, introduce un nombre de usuario" } },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "Por favor, introduce un apellido de usuario" } },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "Por favor, introduce un email" } },
        isEmail: { msg: "Por favor introduce un correo válido"}
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "Por favor, introduce una contraseña" } },
      },
      role: DataTypes.STRING,
      confirmed: DataTypes.BOOLEAN,
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "Por favor, introduce una dirección" } },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
