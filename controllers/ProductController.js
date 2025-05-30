const { Product, Category, Sequelize } = require("../models/index.js");
const product = require("../models/product.js");
const { Op } = Sequelize;

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      await product.addCategory(req.body.id_category); // <- asigna una categoría (por id de categoría) al momento de crear el producto
      res.status(201).send({ msg: "Producto creado con éxito", product });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  /*   async categoryLink(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      await product.addCategory(req.body.id_category); // <- esto asocia en la tabla intermedia
      console.log("Product ID:", req.params.id);
      console.log("Category ID:", req.body.id_category);

      res.send({ mensaje: "Categoría asociada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ mensaje: "Error interno del servidor" });
    }
  }, */
  async update(req, res) {
    try {
      await Product.update(req.body, {
        where: { id: req.params.id },
      });
      res.send("Producto actualizado con éxito");
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async delete(req, res) {
    try {
      await Product.destroy({
        where: { id: req.params.id },
      });
      res.send("Producto eliminado con éxito");
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getAllWithCategories(req, res) {
    try {
      const product = await Product.findAll({
        attributes: ["id", "name", "price"],
        include: [
          {
            model: Category,
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        ],
      });
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id, {
        attributes: ["id", "name", "price"],
      });
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getAllByName(req, res) {
    try {
      const product = await Product.findAll({
        where: { name: { [Op.like]: `%${req.params.name}%` } },
        attributes: ["id", "name", "price"],
      });
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getAllByPrice(req, res) {
    try {
      const product = await Product.findAll({
        where: { price: { [Op.eq]: req.params.price } }, // Op.eq para encontrar un valor igual pasado por parámetro
        attributes: ["id", "name", "price"],
      });
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getAllByPriceRange(req, res) {
    try {
      const minprice = parseFloat(req.params.minprice);
      const maxprice = parseFloat(req.params.maxprice);
      const product = await Product.findAll({
        where: { price: { [Op.between]: [minprice, maxprice] } }, // Op.between para encontrar por rango de precio
        attributes: ["id", "name", "price"],
      });
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getDescPrice(req, res) {
    try {
      const product = await Product.findAll({
        order: [["price", "DESC"]],
      });
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = ProductController;
