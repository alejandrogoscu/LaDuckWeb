"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: models.Prod_Cat,
        foreignKey: "id_product",
        otherKey: "id_category",
      });

      Product.belongsTo(models.Order, {
        foreignKey: "order_id",
      });

      Product.hasMany(models.Review, {
        foreignKey: "id_product",
      });
    }
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor, introduce un nombre de producto" },
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor, introduce un precio de producto" },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      underscored: true,
      timestamps: false,
    }
  );

  return Product;
};
