const express = require("express");
const router = express.Router();
const Question = require("../models/question");
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
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/idict", async (req, res) => {
  try {
    const constructed_questions = {};
    const questions = await Question.find();
    questions.forEach((question) => {
      const id = question.id;
      constructed_questions[id] = question;
    });
    res.json(constructed_questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: "Cannot find question" });
    }
    res.json(question);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const question = new Question({
    title: req.body.title,
    input_type: req.body.input_type,
    options: req.body.options,
  });
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
