const router = require("express").Router();
const LubeModel = require("../models/Lube");
const FilmModel = require("../models/Film");
const PostModel = require("../models/Post");

router.get("/posts", async (req, res, next) => {
  await PostModel.find()
    .then((result) => {
      res.status(200).send(result);
      // res.send(result);
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
  console.log(id, userID);

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
        console.log("Removed dislike, added like");
        res.status(200).send("Liked");
      })
      .catch((error) => {
        console.log(error);
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
        console.log("Liked");
        res.status(200).send("Liked");
      })
      .catch((error) => {
        console.log(error);
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
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
      res.send("error");
    });
  res.send("success");
});

router.post("/dislike_post", async (req, res, next) => {
  const { id, userID } = req.body;
  console.log(id);

  let tmp = await checkReaction(id, userID);
  let liked = tmp[0];
  let disliked = tmp[1];

  console.log(liked, disliked);

  if (liked) {
    PostModel.findByIdAndUpdate(id, {
      $inc: { dislikes: 1, likes: -1 },
      $push: { disliked_by: { userID } },
      $pull: { liked_by: { userID } },
    })
      .then((result) => {
        console.log("Removed like, added dislike");
        res.status(200).send("Disliked");
      })
      .catch((error) => {
        console.log(error);
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
        console.log("Disliked");
        res.status(200).send("Disliked");
      })
      .catch((error) => {
        console.log(error);
        res.status(400);
      });
  }
});
module.exports = router;
