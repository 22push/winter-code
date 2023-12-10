const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
let cookieParser = require("cookie-parser");
const usersignuprouter = require("./routes/signuproute");
const app = express();
const medicineRouter = require('./routes/medicineRoutes');

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use("/user",usersignuprouter);
app.use("/api/v1", medicineRouter);
module.exports = app;
