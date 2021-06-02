const express = require("express");
const router = require("express").Router();
const multer = require("multer");
const PostModel = require("../models/Post");
const dateFormat = require("dateformat");

let now = new Date();

async function checkReaction(id, userID) {
  let liked = false;
  let disliked = false;

  let checkLiked = await PostModel.findById(id, {
    liked_by: { $elemMatch: { userID } },
  });
  let checkDisliked = await PostModel.findById(id, {
    disliked_by: { $elemMatch: { userID } },
  });
  if (checkLiked != null) {
    if (checkLiked.liked_by != "") {
      liked = true;
    }
  }
  if (checkDisliked != null) {
    if (checkDisliked.disliked_by != "") {
      disliked = true;
    }
  }

  return [liked, disliked];
}

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

router.post("/upload_image", (req, res, next) => {
  const upload = multer({ storage }).single("file");
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    }
    console.log("file uploaded to server");
    console.log(req.file);

    // SEND FILE TO CLOUDINARY
    const cloudinary = require("cloudinary").v2;
    cloudinary.config({
      cloud_name: "dnswq1qos",
      api_key: "987928289228622",
      api_secret: "shSCPtttuHsEe68bunOCeUdPnJM",
    });

    const path = req.file.path;
    const uniqueFilename = new Date().toISOString();

    cloudinary.uploader.upload(
      path,
      { public_id: `impress/posts/${uniqueFilename}`, tags: `img` }, // directory and tags are optional
      function (err, image) {
        if (err) return res.send(err);
        console.log("file uploaded to Cloudinary");
        // remove file from server
        const fs = require("fs");
        fs.unlinkSync(path);
        // return image  details
        res.json(image);
      }
    );
  });
});
router.post("/create_post", (req, res, next) => {
  const {
    title,
    description,
    switchType,
    lube,
    film,
    picture,
    userID,
    username,
  } = req.body;

  console.log(req.body);

  const post = new PostModel({
    title,
    description,
    switchType,
    lube,
    film,
    picture,
    userID,
    username,
    _user: req.user._id,
    datePosted: dateFormat(now, "default"),
  });
  console.log(dateFormat(now, "default"));

  PostModel.create(post),
    function (err) {
      console.log(err);
    };
  res.status(200).send("Successfully Uploaded");
});

router.get("/profile", (req, res, next) => {
  res.json({
    user: req.user,
  });
  return;
});

router.get("/posts", async (req, res, next) => {
  await PostModel.find()
    .then((result) => {
      res.status(200);
      res.send(result);
    })
    .catch((error) => {
      res.status(404);
    });
});

router.get("/find_likes", async (req, res, next) => {
  await PostModel.find({
    liked_by: { $elemMatch: { userID: req.user.id } },
  })
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(404);
    });
});

router.get("/find_dislikes", async (req, res, next) => {
  await PostModel.find({
    disliked_by: { $elemMatch: { userID: req.user.id } },
  })
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(404);
    });
});

router.post("/dislike_post", async (req, res, next) => {
  const { id } = req.body;

  let tmp = await checkReaction(id, req.user.id);
  let liked = tmp[0];
  let disliked = tmp[1];

  if (liked) {
    PostModel.findByIdAndUpdate(
      id,
      {
        $inc: { dislikes: 1, likes: -1 },
        $push: { disliked_by: { userID: req.user.id } },
        $pull: { liked_by: { userID: req.user.id } },
      },
      { new: true }
    )
      .then((result) => {
        console.log(result);

        console.log("Removed like, added dislike");
        res.status(200).send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(400);
      });
  } else if (disliked) {
    res.status(400).send("Already Disliked");
  } else {
    PostModel.findByIdAndUpdate(
      id,
      {
        $push: { disliked_by: { userID: req.user.id } },
        $inc: { dislikes: 1 },
      },
      { new: true }
    )
      .then((result) => {
        console.log(result);

        console.log("Disliked");
        res.status(200).send(result);
      })
      .catch((error) => {
        console.log(result);

        console.log(error);
        res.status(400);
      });
  }
});

router.post("/like_post", async (req, res, next) => {
  const { id } = req.body;

  let tmp = await checkReaction(id, req.user.id);
  let liked = tmp[0];
  let disliked = tmp[1];

  if (disliked) {
    PostModel.findByIdAndUpdate(
      id,
      {
        $inc: { dislikes: -1, likes: 1 },
        $push: { liked_by: { userID: req.user.id } },
        $pull: { disliked_by: { userID: req.user.id } },
      },
      { new: true }
    )
      .then((result) => {
        console.log(result);
        console.log("Removed dislike, added like");
        res.status(200).send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(400);
      });
  } else if (liked) {
    res.status(400).send("Already Liked");
  } else {
    PostModel.findByIdAndUpdate(
      id,
      {
        $push: { liked_by: { userID: req.user.id } },
        $inc: { likes: 1 },
      },
      { new: true }
    )
      .then((result) => {
        console.log(result);

        console.log("Liked");
        res.status(200).send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(400);
      });
  }
});

module.exports = router;
