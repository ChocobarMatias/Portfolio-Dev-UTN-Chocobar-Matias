const nodemailer = require('nodemailer');
const dotenv = require("dotenv")

dotenv.config()


// Configura el transporte de Nodemailer
    let transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.USER2,
            pass: process.env.PASS2
        }
    });

    module.exports = {transporter}