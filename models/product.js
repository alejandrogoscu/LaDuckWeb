"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Category, {
        through: models.Prod_Cat,
        foreignKey: "id_product",
        otherKey: "id_category",
      });
      Product.belongsTo(models.Order, { foreignKey: "order_id" });
      Product.hasMany(models.Review, { foreignKey: "id_product" });
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
      order_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
