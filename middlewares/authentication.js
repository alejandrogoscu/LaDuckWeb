const { User, Token, Sequelize } = require("../models");
const { Op } = Sequelize;
const jwt = require("jsonwebtoken")
const { jwt_secret } = require("../config/config.json")["development"]

const authentication = async(req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, jwt_secret);
    const user  = await User.findByPk(payload.id);
    const tokenFound = await Token.findOne({
      where: {
        [Op.and]: [
          { UserId: user.id },
          { token: token }
        ]
      }
    });
    if (!tokenFound) {
      return res.status(401).send({ msg: "No estas autorizad@" })
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).send({ error, msg: "Ha habido un problema con el token" })
  }
}


const isAdmin = async(req, res, next) => {
  const admins = ["MamaPato"];
  if (!admins.includes(req.user.role)) {
    return res.status(403).send({ msg: "No tienes permisos" })
  }
  next();
}


module.exports = { authentication, isAdmin }