const express = require("express");
const router = express.Router();
const musicPiece = require("../models/musicPiece");
const verifyUser = require("../verifyUser");

router.use(async (req, res, next) => {
  if (req.method === "GET") next();
  else {
    const user = await verifyUser(req);
    if (user === "admin") next();
    else {
      res.sendStatus(403);
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const pieces = await musicPiece.find();
    res.json(pieces);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const piece = new musicPiece(req.body);
  try {
    const alreadyExists = await musicPiece.find({
      title: req.body.title,
      artist: req.body.artist,
    });
    if (alreadyExists.length === 0) {
      const newPiece = await piece.save();
      res.status(201).json(newPiece);
    } else {
      res.send({
        error: "Failure: Already have a piece with that title and artist",
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
