const router = require("express").Router();
const LubeModel = require("../models/Lube");
const FilmModel = require("../models/Film");
const PostModel = require("../models/Post");

router.get("/posts", async (req, res, next) => {
  await PostModel.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(404);
    });
  return next();
});

router.get("/accessories", async (req, res, next) => {
  const lubes = await LubeModel.find();
  const films = await FilmModel.find();
  data = { lubes, films };
  res.send(data);
});

router.post("/like_post", async (req, res, next) => {
  const { id, userID } = req.body;

  let tmp = await checkReaction(id, userID);
  let liked = tmp[0];
  let disliked = tmp[1];

  if (disliked) {
    PostModel.findByIdAndUpdate(id, {
      $inc: { dislikes: -1, likes: 1 },
      $push: { liked_by: { userID } },
      $pull: { disliked_by: { userID } },
    })
      .then((result) => {
        res.status(200).send("Liked");
      })
      .catch((error) => {
        res.status(400);
      });
  } else if (liked) {
    res.status(401).send("Already Liked");
  } else {
    PostModel.findByIdAndUpdate(id, {
      $push: { liked_by: { userID } },
      $inc: { likes: 1 },
    })
      .then((result) => {
        res.status(200).send("Liked");
      })
      .catch((error) => {
        res.status(400);
      });
  }
});

router.post("/find_likes", async (req, res, next) => {
  const { userID } = req.body;
  PostModel.find({
    liked_by: { $elemMatch: { userID: "6099a6b26506d7479e4d2563" } },
  })
    .then((result) => {
      res.status(200);
    })
    .catch((error) => {
      res.send("error");
    });
  res.send("success");
});

router.post("/dislike_post", async (req, res, next) => {
  const { id, userID } = req.body;

  let tmp = await checkReaction(id, userID);
  let liked = tmp[0];
  let disliked = tmp[1];

  if (liked) {
    PostModel.findByIdAndUpdate(id, {
      $inc: { dislikes: 1, likes: -1 },
      $push: { disliked_by: { userID } },
      $pull: { liked_by: { userID } },
    })
      .then((result) => {
        res.status(200).send("Disliked");
      })
      .catch((error) => {
        res.status(400);
      });
  } else if (disliked) {
    res.status(401).send("Already Disliked");
  } else {
    PostModel.findByIdAndUpdate(id, {
      $push: { disliked_by: { userID } },
      $inc: { dislikes: 1 },
    })
      .then((result) => {
        res.status(200).send("Disliked");
      })
      .catch((error) => {
        res.status(400);
      });
  }
});
module.exports = router;
