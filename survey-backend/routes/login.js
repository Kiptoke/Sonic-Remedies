const express = require("express");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const verifyUser = require("../verifyUser");

const makeToken = () => {
  return jwt.sign(
    { username: "admin" },
    fs.readFileSync(process.env.KEY_PATH).toString(),
    {
      expiresIn: "120m",
    }
  );
};

router.post("/", async (req, res) => {
  if (
    req.body.username === "admin" &&
    req.body.password === fs.readFileSync(process.env.PASS_PATH).toString()
  ) {
    res.send(makeToken());
  } else {
    res.sendStatus(403);
  }
});

router.get("/me", async (req, res) => {
  const user = await verifyUser(req);
  if (user) res.send(user);
  else {
    res.sendStatus(404);
  }
});

router.get("/refresh", async (req, res) => {
  const user = await verifyUser(req);
  if (user === "admin") res.send(makeToken());
  else {
    res.sendStatus(403);
  }
});

module.exports = router;
