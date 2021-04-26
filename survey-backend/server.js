require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const fs = require("fs");
const https = require("https");
//const fs = require("fs");

//app config
const app = express();
const port = process.env.SONICREM_API_PORT || 5000;
const origin = process.env.SONICREM_NET
  ? `https://sonicremedies.net:${process.env.SONICREM_CLIENT_PORT}`
  : "http://localhost:3000";
//middlewares
app.use(express.json());
app.use(cors({ origin: origin }));
app.use(helmet());

//certificatation
let certificate = "";
let privateKey = "";
if (process.env.SONICREM_NET) {
  certificate = fs.readFileSync(
    "../ssl/certs/sonicremedies_net_ee2f8_ed3d3_1626739199_99492aa2cd009eb466f472b351714a04.crt"
  );
  privateKey = fs.readFileSync(
    "../ssl/keys/ee2f8_ed3d3_15f84329f0cb1ba91733cf1284c67bde.key"
  );
}

const connection_string = `mongodb+srv://${process.env.SONICREM_DB_AUTH}@cluster0.mz4hd.mongodb.net/music-app?retryWrites=true&w=majority`;
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(connection_string));

const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => console.log("Connected to database"));

//sets router
const setsRouter = require("./routes/sets");
app.use("/sets", setsRouter);

//questions router
const questionsRouter = require("./routes/questions");
app.use("/questions", questionsRouter);

const setOrderRouter = require("./routes/set-order");

app.use("/set-order", setOrderRouter);

//listener (this always comes last)

//Host
if (process.env.SONICREM_NET) {
  https
    .createServer(
      {
        key: privateKey,
        cert: certificate,
      },
      app
    )
    .listen(port, () => console.log(`listening on localhost: ${port}`));
  //Local
} else {
  app.listen(port, "localhost", () => {
    console.log(`listening on localhost: ${port}`);
  });
}
