const express = require("express");
const app = express();
const port = 8001;
const bodyParser = require("body-parser");
const userRouter = require("./router/authStudent")
const mongoose = require("mongoose");
const {handlerForUploadFile}=require("./controller/S_form");
const ejs=require('ejs');
const multer = require("multer"); // Specify upload directory



const routes = require("./router/Student_signUp");
const path = require("path");
app.use(express.static("public")); //for css & image & js
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(express.urlencoded({ extended: true})); // Parse URL-encoded bodies
//Connection



mongoose.connect("mongodb://localhost:27017/StudentPannel").then((res) => {
  console.log("Mongodb connected");
});
//view engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   return cb(null, "./uploads"); // specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // keep the original name of the file
  },
});
const upload = multer({ storage: storage });

app.use("/", routes);
app.post("/upload",upload.single('Projectfile'),handlerForUploadFile);
app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
