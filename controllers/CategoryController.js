const { Product, Category } = require("../models/index.js");
//const { Op } = Sequelize;

const CategoryController = {
  async create(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(201).send({ msg: "Categoría creada con éxito", category });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      await Category.update(req.body,{
        where: { id: req.params.id }
      })
      res.send("Categoría actualizada con éxito")
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = CategoryController;
