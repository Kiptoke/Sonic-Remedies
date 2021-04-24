require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//app config
const app = express();
const port = process.env.SONICREM_PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());

//db connection (mongoose)
mongoose
  .connect(
    `mongodb+srv://${process.env.SONICREM_DATABASE_AUTH}@cluster0.mz4hd.mongodb.net/music-app?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .catch((error) => console.log(error));

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
app.listen(port, () => {
  console.log(`listening on localhost: ${port}`);
});
