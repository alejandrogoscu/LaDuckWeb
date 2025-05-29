'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Products", "price", {
      type: Sequelize.DECIMAL(10, 2)
    }); // 10 digitos y 2 serán decimales.
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Products", "price", {
      type: Sequelize.FLOAT
    });
  }
};
