'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Prod_Cats", [
      {
        id_product: 1,
        id_category: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 1,
        id_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 2,
        id_category: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 2,
        id_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 3,
        id_category: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 3,
        id_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 4,
        id_category: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 4,
        id_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 5,
        id_category: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 5,
        id_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 6,
        id_category: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 6,
        id_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 7,
        id_category: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 7,
        id_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 8,
        id_category: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 8,
        id_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 9,
        id_category: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 9,
        id_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 10,
        id_category: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 10,
        id_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 11,
        id_category: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 11,
        id_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 12,
        id_category: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_product: 12,
        id_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])

  },

  async down(queryInterface, Sequelize) {
  }
};
