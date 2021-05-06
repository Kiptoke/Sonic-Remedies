const express = require("express");
const router = express.Router();
const SetOrder = require("../models/set-order");
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

//Get all
router.get("/", async (req, res) => {
  try {
    const setOrder = await SetOrder.find();
    res.json(setOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create one
router.post("/", async (req, res) => {
  const setOrder = new SetOrder({
    sets: req.body.sets,
  });
  try {
    const newSetOrder = await setOrder.save();
    res.status(201).json(newSetOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//patch req
router.patch("/", async (req, res) => {
  try {
    const setOrder = await SetOrder.find();
    if (setOrder == null) {
      return res.status(404).json({ message: "Cannot find set order" });
    }
    setOrder[0].sets = req.body.sets;
    const updatedSetOrder = await setOrder[0].save();
    res.json(updatedSetOrder);
  } catch (err) {
    return res.status(500).json({ mesage: err.message });
  }
});

module.exports = router;
