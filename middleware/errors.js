
// IMPORTANTE!!!!!!!!!!
// Acordarse de añadirlo en el index.js al final de nuestras rutas < app.use(typeError) >.
// Se debería importar automáticamente, si no: < const { typeError } = require("./middlewares/errors") >
// Habrá que añadir el < next > en aquellos controllers que manejen un error de validacion o valor único.


const handleValidationError = (err, res) => {
  let errors = err.errors.map((el) => el.message);
  if (errors.length > 1) {
    const msgErr = errors.join(" || ");
    res.status(400).send({ messages: msgErr });
  } else {
    res.status(400).send({ messages: errors });
  }
};

const typeError = (err, req, res, next) => {
  if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstrainError") {
    handleValidationError(err, res);
  } else {
    res.status(500).send({ msg: "Hubo un problema", err })
  }
};


module.exports = { typeError }
