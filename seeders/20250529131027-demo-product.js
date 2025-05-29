'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( "Products", [
      {
        name: "Arnold Cuakzenegger",
        price: 20
      },
      {
        name: "Dua Licuak",
        price: 23
      },
      {
        name: "Elon Cuask",
        price: 3
      },
      {
        name: "Shakira Cuakira",
        price: 19
      },
      {
        name: "Cuaky Chan",
        price: 25
      },
      {
        name: "Duck Norris",
        price: 15
      },
      {
        name: "Lady CuaCuak",
        price: 28
      },
      {
        name: "Cuaky Jordan",
        price: 18
      },
      {
        name: "Cuakminem",
        price: 15
      },
      {
        name: "Antonio Cuakderas",
        price: 12
      },
      {
        name: "Cuackenbauer",
        price: 8
      },
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
