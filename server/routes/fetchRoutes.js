const router = require("express").Router();
const LubeModel = require("../models/Lube");
const FilmModel = require("../models/Film");
const PostModel = require("../models/Post");

router.get("/accessories", async (req, res, next) => {
  const lubes = await LubeModel.find();
  const films = await FilmModel.find();
  data = { lubes, films };
  res.send(data);
});

module.exports = router;
