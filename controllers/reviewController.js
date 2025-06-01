const { Review, User, Sequelize } = require("../models/index.js");
const { Op } = Sequelize

const ReviewController = {
  async create(req, res) {
    try {
      const review = await Review.create(req.body)
      res.status(201).send({ msg: "Review creada con exito", review })
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async getAll(req, res) {
    try {
      const review = await Review.findAll({
        include: [{ model: User, attributes: ["id", "name"] }]
      })
      res.status(200).send(review)
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async getById(req, res) {
    try {
      const review = await Review.findByPk(req.params.id, {
        include: [{ model: User, attributes: ["id", "name"] }]
      })
      res.status(200).send(review)
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async getOneByContent(req, res) {
    try {
      const review = await Review.findOne({
        where: {content: { [Op.like]: `%${req.params.content}%` }},
        include: [{ model: User, attributes: ["id", "name"]}]
      })
      res.status(200).send(review)
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async update(req, res) {
    try {
      const review = req.body.content
      await Review.update(req.body.content, { where: { id: req.params.id } })
      res.send({ msg: "Review actualizada con éxito", review })
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async delete(req, res) {
    try {
      await Review.destroy({
        where: { id: req.params.id }
      })
      res.send("Su review se ha eliminado con éxito")
    } catch (error) {
      res.status(500).send(error)
    }
  }
}



module.exports = ReviewController