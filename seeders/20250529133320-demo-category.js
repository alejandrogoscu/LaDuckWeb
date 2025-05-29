'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( "Categories", [
      {
        name: "Actor / Actriz",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cantante",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Deportista",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Celebridad",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cuakito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Megacuak",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
