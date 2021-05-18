const express = require("express");
const router = express.Router();
const Response = require("../models/response");

router.use(async (req, res, next) => {
  if (req.method === "POST") next();
  else {
    const user = await verifyUser(req);
    if (user === "admin") next();
    else {
      res.sendStatus(403);
    }
  }
});

//Get all
router.get("/", async (req, res) => {
  try {
    const responses = await Response.find();
    res.json(responses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create one
router.post("/", async (req, res) => {
  const response = new Response({
    musicids: req.body.musicids,
    questionGroups: req.body.questionGroups,
    questions: req.body.questions,
    answers: req.body.answers,
  });
  try {
    const newResponse = await response.save();
    res.status(201).json(newResponse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete one
router.delete("/:id", async (req, res) => {
  try {
    const response = await Response.findById(req.params.id);
    if (response == null) {
      return res.status(404).json({ message: "Cannot find response" });
    }
    response.remove();
    res.json({ message: "Deleted response" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
