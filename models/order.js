"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: "id_user" });
      Order.hasMany(models.Product, { foreignKey: "order_id" });
    }
  }
  Order.init(
    {
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Order;
};
