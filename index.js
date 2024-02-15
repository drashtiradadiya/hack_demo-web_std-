const express = require("express");
const app = express();
const port = 8001;
const mongoose = require('mongoose');

const routes = require("./router/Student_signUp");
const path = require("path");

//Connection

mongoose.connect("mongodb://localhost:27017/StudentPannel").then((res) => {console.log("Mongodb connected")});
//view engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/api", routes);
app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
