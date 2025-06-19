"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: "id_user" });
      Review.belongsTo(models.Product, { foreignKey: "id_product" });
    }
  }

  Review.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "reviews",
      underscored: true,
      timestamps: false,
    }
  );

  return Review;
};
