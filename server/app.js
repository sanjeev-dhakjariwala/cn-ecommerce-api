const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoDB = require("../db/db");

app.use(cors());
mongoDB();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));

module.exports = app;
