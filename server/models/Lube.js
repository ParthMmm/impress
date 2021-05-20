const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lubeSchema = new Schema({
  name: String,
});

const LubeModel = mongoose.model("lube", lubeSchema);

module.exports = LubeModel;
