'use strict';


// sequelize db:seed --seed 20250530165245-demo-user.js        
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Pablo',
        last_name: 'Patito',
        email: 'pablo.patito@example.com',
        password: 'patitos123',
        role: 'user',
        adress: 'Calle de los Patos 12, Madrid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ana',
        last_name: 'Ducklover',
        email: 'ana.duck@example.com',
        password: 'ducklover2024',
        role: 'user',
        adress: 'Av. Lago de los Cisnes 45, Sevilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rubén',
        last_name: 'Ducky',
        email: 'ruben.ducky@example.com',
        password: 'patoamarillo',
        role: 'user',
        adress: 'Paseo de los Patitos 77, Valencia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clara',
        last_name: 'Quack',
        email: 'clara.quack@example.com',
        password: 'quackquack',
        role: 'MamaPato',
        adress: 'Calle del Quack 89, Barcelona',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Diego',
        last_name: 'Duckinson',
        email: 'diego.duckinson@example.com',
        password: 'ducksForever!',
        role: 'user',
        adress: 'Camino del Pato Feliz 23, Bilbao',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
