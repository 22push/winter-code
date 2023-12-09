const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
let cookieParser = require("cookie-parser");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(cors());
app.use(express.json());
module.exports = app;
