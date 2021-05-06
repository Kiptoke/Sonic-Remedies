const fs = require("fs");
const jwt = require("jsonwebtoken");

const verifyUser = async (req) => {
  try {
    const user = jwt.verify(
      req.headers.authorization,
      fs.readFileSync(process.env.KEY_PATH).toString()
    );
    return user.username;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = verifyUser;
