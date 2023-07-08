const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");

const questionRouter = require("./api/routes/question");
const answerRouter = require("./api/routes/answer");
const userRouter = require("./api/routes/user"); 

const mongoose = require("mongoose");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(questionRouter);
app.use(answerRouter);
app.use(userRouter);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.listen(process.env.PORT, () => {
  console.log("Your app is alive!!!!!");
});



