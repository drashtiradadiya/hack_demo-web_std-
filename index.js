const express = require("express");
const app = express();
const multer = require("multer"); // Specify upload directory
const port = 8001;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // keep the original name of the file
  },
});
const upload = multer({ storage: storage });

const routes = require("./router/Student_signUp");
const path = require("path");
app.use(express.static("public")); //for css & image & js
app.use(bodyParser.json()); // Parse JSON-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
//Connection

// Handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  // Process the uploaded file, save metadata to database, etc.
  res.status(200).send("File uploaded successfully");
});

mongoose.connect("mongodb://localhost:27017/StudentPannel").then((res) => {
  console.log("Mongodb connected");
});
//view engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/api", routes);
app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
