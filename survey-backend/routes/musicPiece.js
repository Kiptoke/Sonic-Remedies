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
    const newPiece = await piece.save();
    res.status(201).json(newPiece);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
