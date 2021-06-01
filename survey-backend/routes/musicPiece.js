const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const musicPiece = require("../models/musicPiece");
const verifyUser = require("../verifyUser");
const fs = require("fs");
const formidable = require("formidable");

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

router.delete("/:id", async (req, res) => {
  fs.unlink("./files/" + req.params.id + ".mp3", (err) => {
    if (err) console.log(err);
    else {
      musicPiece.deleteOne({ _id: mongodb.ObjectId(req.params.id) }, (err) => {
        if (err) console.log(err);
      });
    }
  });
});

router.post("/files", async (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) console.log(err.message);
    else {
      let oldPath = files.file.path;
      let newPath = "./files/" + fields["filename"] + ".mp3";
      fs.copyFile(oldPath, newPath, (err) => {
        if (err) console.log(err.message);
      });
    }
  });
});

router.get("/files/:id", async (req, res) => {
  fs.readFile("./files/" + req.params.id, (err, data) => {
    if (err) console.log(err.message);
    else {
      res.send(data);
    }
  });
});

module.exports = router;
