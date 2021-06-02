const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-url");

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: mongoose.SchemaTypes.Url,
  switchType: String,
  lube: String,
  film: String,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  datePosted: String,
  username: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  userID: String,
  liked_by: [
    {
      userID: String,
    },
  ],
  disliked_by: [
    {
      userID: String,
    },
  ],
});

const PostModel = mongoose.model("posts", postSchema);

module.exports = PostModel;
