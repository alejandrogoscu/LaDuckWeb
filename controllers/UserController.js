const { User, Token, Sequelize } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"]
const { Op } = Sequelize;


const UserController = {
  async create(req, res) {
    try {
      const password = bcrypt.hashSync(req.body.password, 10) // Al poner <hashSync> no necesitamos el <await>
      const user = await User.create({ ...req.body, password: password, role: "user" })
      res.status(201).send({ msg: "Usuari@ creado con éxito", user });
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email }
      })

      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!user) {
        return res.status(400).send({ msg: "Usuari@ o contraseña incorrectos" })
      }
      if (!isMatch) {
        return res.status(400).send({ msg: "Usuari@ o contraseña incorrectos" })
      }

      const token = jwt.sign({ id: user.id }, jwt_secret);
      await Token.create({ token, UserId: user.id });
      res.send({ msg: `Bienvenid@ ${user.name}`, user, token })
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization }
          ]
        }
      })
      res.send({ msg: "Desconectad@ con éxito" })
    } catch (error) {
      res.status(500).send({ msg: "Hubo un problema la tratar de desconectarte" })
    }
  }
}


module.exports = UserController