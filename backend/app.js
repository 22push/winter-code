const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
let cookieParser = require("cookie-parser");
const usersignuprouter = require("./routes/signuproute");
const medicineroute = require("./routes/medicineRoutes");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use("/user",usersignuprouter);
app.use("/medicine",medicineroute);
module.exports = app;
