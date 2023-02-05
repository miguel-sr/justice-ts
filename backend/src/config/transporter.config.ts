import path from "path";
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

import { config } from "dotenv";
config();

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: {
      extname: ".handlebars",
      partialsDir: path.resolve(".src/views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./src/views"),
    extName: ".handlebars",
  })
);

export default transporter;
