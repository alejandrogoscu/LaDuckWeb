"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Token, { foreignKey: "user_id" });
      User.hasMany(models.Review, { foreignKey: "id_user" });
      User.hasMany(models.Order, { foreignKey: "id_user" });
    }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor, introduce un nombre de usuario" },
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor, introduce un apellido de usuario" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor, introduce un email" },
          isEmail: { msg: "Por favor introduce un correo válido" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor, introduce una contraseña" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor, introduce una dirección" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
      timestamps: false,
    }
  );

  return User;
};
