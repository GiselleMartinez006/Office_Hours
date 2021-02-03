const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://blueHawk:774107@cluster0.es6oo.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true,  useCreateIndex: true, useFindAndModify: false,});
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
mongoose.connect(
uri,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    return console.log("Connected to the voter DB");
  }
);
const User = require("./models/user");

emptyhandling = (found, res) => {
  !found.length //is 2 equal signs in purpose
    ? res.status(204).send()
    : res.status(200).send(found);
};

//get all users
app.get("/usertest", (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return emptyhandling(users, res);
  });
});
app.get("/", function (req, res, next) {
  res.send({ msg: "This is CORS-enabled for all origins!" });
});
app.get("/test", function (req, res, next) {
  res.send("Testingsx3");
});

app.use("/auth", require("./routes/authRouter"));
app.use("/app/", expressJwt({ secret: process.env.SECRET }));
app.use("/app/user", require("./routes/userRouter.js"));
app.use("/app/issues", require("./routes/issuesRouter.js"));
app.use("/app/comments", require("./routes/commentsRouter.js"));
// app.use("/postuser", require("./auth_route/newuser.js"));
// app.use("/home", require("./auth_route/home.js")); //list all issues here
// app.use("/profile", require("./auth_route/profile.js"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});
var port = (process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Server is running on port ${port}; with CORS anabled`);
});
