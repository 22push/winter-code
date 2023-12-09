const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://rgjain04:OXKkDCdnvIhWDRrP@cluster0.hhypail.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});