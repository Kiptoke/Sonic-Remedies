require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
//const fs = require("fs");

//app config
const app = express();
const port = process.env.SONICREM_DB_PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());

//certificatation
let certificate = "";
let privateKey = "";
if (process.env.SONICREM_NET) {
  certificate = fs.readFileSync(
    "../ssl/certs/api_sonicremedies_net_e024d_1b403_1627171199_4c90dea0e9816e576d416d354406b2c8.crt"
  );
  privateKey = fs.readFileSync(
    "../ssl/keys/e024d_1b403_c522c69f5c39fc8f310041575d15524a.key"
  );
}

//db connection (mongoose)
// const connection_string = process.env.SONICREM_NET
//   ? "mongodb+srv://cluster0.mz4hd.mongodb.net/music-app?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"
//   : `mongodb+srv://${process.env.SONICREM_DB_AUTH}@cluster0.mz4hd.mongodb.net/music-app?retryWrites=true&w=majority`;
const connection_string = `mongodb+srv://${process.env.SONICREM_DB_AUTH}@cluster0.mz4hd.mongodb.net/music-app?retryWrites=true&w=majority`;
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // sslKey: prikey,
    // sslCert: certificate,
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
// const { Certificate } = require("crypto");
app.use("/set-order", setOrderRouter);

//listener (this always comes last)
https
  .createServer(
    {
      key: privateKey,
      cert: certificate,
    },
    app
  )
  .listen(port);
// app.listen(port, () => {
//   console.log(`listening on localhost: ${port}`);
// });
