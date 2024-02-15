const express = require("express");
const app = express();
const port = 8001;
// const mongoose = require('mongoose');

const { connectMongodb } = require("./config/databaseControl");
const { IpReqRes } = require("./middlewares/studentmiddl");
const routes = require("./router/Student_signUp");
const path = require("path");

//Connection
connectMongodb("mongodb://localhost:27017/StudentPannel");
// app.use(express.static(path.join(__dirname,'public')));
//view engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));

// middelware
app.use(IpReqRes);
app.use("/api", routes);
app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
