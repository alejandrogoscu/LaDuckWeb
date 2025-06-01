const { User, Token, Sequelize } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"]
const { Op } = Sequelize;
const transporter = require("../config/nodemailer.js");


const UserController = {
  async create(req, res, next) {
    try {
      const password = bcrypt.hashSync(req.body.password, 10) // Al poner <hashSync> no necesitamos el <await>
      const user = await User.create({ ...req.body, password: password, role: "user", confirmed: false })
      const emailToken = jwt.sign({ email: req.body.email }, jwt_secret, { expiresIn:"48h" })
      const url = "http://localhost:3000/users/confirm/" + emailToken
      await transporter.sendMail({
        to: req.body.email,
        subject: "Confirma tu registro",
        html: `<h3>Bienvenid@ a la DuckWeb, estás apunto de registrarte</h3>
        <a href="${url}">Confirma tu registro</a>`
      })
      res.status(201).send({ msg: "Te hemos enviado un correo para confirmar el registro", user });
    } catch (error) {
      next(error)
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email }
      })

      if (!user.confirmed) {
        return res.status(400).send({ msg: "Debes confirmar tu correo" })
      }

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

  async confirm(req, res) {
    try {
      const token = req.params.emailToken
      const payload = jwt.verify(token, jwt_secret)
      User.update({ confirmed: true }, { where: {email: payload.email} })
      res.status(201).send("Usuari@ confirmad@ con éxito")
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