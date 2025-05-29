'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( "Categories", [
      {
        name: "Actor / Actriz"
      },
      {
        name: "Cantante"
      },
      {
        name: "Deportista"
      },
      {
        name: "Celebridad"
      },
      {
        name: "Cuakito"
      },
      {
        name: "Megacuak"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
