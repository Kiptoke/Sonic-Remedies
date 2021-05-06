const express = require("express");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const verifyUser = require("../verifyUser");

router.post("/", async (req, res) => {
  if (
    req.body.username === "admin" &&
    req.body.password === fs.readFileSync(process.env.PASS_PATH).toString()
  ) {
    res.send(
      jwt.sign(
        { username: req.body.username },
        fs.readFileSync(process.env.KEY_PATH).toString(),
        {
          expiresIn: "30m",
        }
      )
    );
    res.sendStatus(200);
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

module.exports = router;
