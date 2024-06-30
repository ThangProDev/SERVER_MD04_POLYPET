var nodemailer = require("nodemailer")
require('dotenv').config();

const mail = process.env.MAIL;
const passmail = process.env.PASSMAIL;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: mail,
        pass: passmail,
    },
});
module.exports = transporter;