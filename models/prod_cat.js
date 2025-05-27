'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prod_Cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prod_Cat.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prod_Cat',
  });
  return Prod_Cat;
};