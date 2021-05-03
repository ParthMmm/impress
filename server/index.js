require("dotenv").config();
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("./services/passport");

mongoose.connect(process.env.DATABASE_URL);

const app = express();
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
