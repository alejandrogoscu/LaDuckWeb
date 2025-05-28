const { Product, Category } = require("../models/index.js");
//const { Op } = Sequelize;

const CategoryController = {
  async create(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(201).send({ msg: "Post creado con éxito", category });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = CategoryController;
