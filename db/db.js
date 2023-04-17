const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();

const connectToMongo = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log(
        colors.yellow(
          `Connected to MongoDB successfully ${res.Connection.name}`
        )
      );
    })
    .catch((err) => {
      console.log(colors.red(err));
    });
};

module.exports = connectToMongo;
