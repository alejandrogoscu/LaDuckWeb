const { Product, Category } = require("../models/index.js");
//const { Op } = Sequelize;

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      res.status(201).send({ msg: "Post creado con éxito", product });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = ProductController;
