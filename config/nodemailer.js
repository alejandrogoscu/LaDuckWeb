
const nodemailer = require("nodemailer");
const { user, pass } = require("./keys")

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: user,
    pass: pass
  }
});

module.exports = transporter;