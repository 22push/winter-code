const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const { MongoClient, ServerApiVersion } = require('mongodb');
dotenv.config({ path: "./config.env" });
const uri = "mongodb+srv://rgjain04:OXKkDCdnvIhWDRrP@cluster0.hhypail.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(process.env.MONGO_PROD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});