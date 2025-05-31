const { Product, Category, Sequelize } = require("../models/index.js");
const product = require("../models/product.js");
const { Op } = Sequelize;

const OrderController = {
  async create(req, res) {
    try {
      const order = await Order.create(req.body);
      await order.addProduct(req.body.id_product); // <- asigna una categoría (por id de categoría) al momento de crear el producto
      res.status(201).send({ msg: "Orden creada con éxito", order });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
