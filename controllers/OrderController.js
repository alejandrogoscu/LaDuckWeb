const { Order, Product, User } = require("../models/index");

const OrderController = {
  async create(req, res) {
    try {
      const { id_user, id_products } = req.body;

      const order = await Order.create({
        id_user: id_user,
      });

      await Promise.all(
        id_products.map(async (productId) => {
          const product = await Product.findByPk(productId);
          if (product) {
            await product.update({ order_id: order.id });
          }
        })
      );

      res.status(201).send({ msg: "Orden creada con éxito", order });
    } catch (error) {
      res.status(500).send({ error: "Error al crear la orden" });
    }
  },
  async getAllOrdersWithProducts(req, res) {
    try {
      const order = await Order.findAll({
        attributes: ["id"],
        include: [
          {
            model: User,
            attributes: ["name", "last_name", "adress"],
          },
          {
            model: Product,
            attributes: ["name", "price"],
          },
        ],
      });
      res.send(order);
    } catch (error) {
      res.status(500).send({ error: "No se han podido obtener los pedidos" });
    }
  },
};

module.exports = OrderController;
