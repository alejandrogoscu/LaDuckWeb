const { Product, Category } = require("../models/index.js");
const product = require("../models/product.js");
//const { Op } = Sequelize;

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      res.status(201).send({ msg: "Producto creado con éxito", product });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async categoryLink(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      await product.addCategory(req.body.id_category); // <- esto asocia en la tabla intermedia MOVER A CREATE
      console.log("Product ID:", req.params.id);
      console.log("Category ID:", req.body.id_category);

      res.send({ mensaje: "Categoría asociada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ mensaje: "Error interno del servidor" });
    }
  },
};

module.exports = ProductController;
