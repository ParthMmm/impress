const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-url");

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: mongoose.SchemaTypes.Url,
  lube: String,
  film: String,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  datePosted: Date,
  _user = {type: Schema.Types.ObjectId, ref: "User"}
});

//Hash user passwords before saved in db

const PostModel = mongoose.model("posts", postSchema);

module.exports = PostModel;
