require("dotenv").config();
var express = require("express");
var app = express();
var api = require('./controllers/yelpApi');
var axios = require("axios");
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(require("./middleware/headers"));

app.use("/api", api);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`))