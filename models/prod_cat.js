"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Prod_Cat extends Model {
    static associate(models) {}
  }

  Prod_Cat.init(
    {
      id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Prod_Cat",
      tableName: "prod_cat",
      underscored: true,
      timestamps: false,
    }
  );

  return Prod_Cat;
};
