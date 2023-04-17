const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoDB = require("../db/db");

app.use(cors());
//contecting to MongoDB that is getting imported above
mongoDB();

//using bodyParser to parse json request body
app.use(bodyParser.json({ limit: "50mb" }));
//using bodyParser to parse urlencoded request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));

module.exports = app;
