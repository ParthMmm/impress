const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema({
  name: String,
});

const FilmModel = mongoose.model("film", filmSchema);

module.exports = FilmModel;
