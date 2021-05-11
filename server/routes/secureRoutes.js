const express = require("express");
const router = express.Router();

router.get("/profile", (req, res, next) => {
  res.json({
    user: req.user,
  });
  return;
});

module.exports = router;
