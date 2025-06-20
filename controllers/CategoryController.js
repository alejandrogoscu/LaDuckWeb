const { Category, Product, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

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
      await Category.update(req.body, {
        where: { id: req.params.id },
      });
      res.send("Categoría actualizada con éxito");
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async delete(req, res) {
    try {
      await Category.destroy({
        where: { id: req.params.id },
      });
      res.send("Categoría eliminada con éxito");
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // ESTO FALTA POR TESTEAR!!!!!
  async getAllWithProducts(req, res) {
    try {
      const categories = await Category.findAll({
        include: [
          {
            model: Product,
            attributes: ["id", "name", "price"],
            through: { attributes: [] },
          },
        ],
      });
      res.send(categories);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getById(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      res.send(category);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getOneByName(req, res) {
    try {
      const category = await Category.findOne({
        where: { name: { [Op.like]: `%${req.params.name}%` } },
      });
      res.send(category);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = CategoryController;
