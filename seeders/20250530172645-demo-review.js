'use strict';

// sequelize db:seed --seed 20250530172645-demo-review.js   
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        content: "Arnold Cuakzenegger es el Schwarzenegger de los patos. ¡Músculos y cuacks por igual!",
        id_product: 1,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Dua Licuak canta mejor bajo la ducha. ¡Perfecto para acompañar mis conciertos acuáticos!",
        id_product: 2,
        id_user: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Elon Cuask me inspiró a lanzar patitos al espacio. Barato y visionario.",
        id_product: 3,
        id_user: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Shakira Cuakira mueve las plumas mejor que sus caderas. Me enamoré.",
        id_product: 4,
        id_user: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Cuaky Chan combina artes marciales con ternura. Cuidado, ¡te conquista de un cuack!",
        id_product: 5,
        id_user: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Duck Norris no nada... el agua se aparta para dejarlo pasar. Leyenda.",
        id_product: 6,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Lady CuaCuak es glamourosa, elegante y perfecta para selfies en la bañera.",
        id_product: 7,
        id_user: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Cuakminem escupe barras de cuack. Freestyle cada vez que lo aprietas.",
        id_product: 9,
        id_user: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
