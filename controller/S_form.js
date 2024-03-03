const Student_signup = require("../models/student.js");
const { MongoClient, ObjectId } = require("mongodb");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'dagff8fw5',
  api_key: '741714121227712',
  api_secret: 'mAmOcMCAzh0oWPL5g_deCKfLtt8',
})

const uri = "mongodb://localhost:27017/StudentPannel";

// Create a new MongoClient
const client1 = new MongoClient(uri);

async function handlerS_Form(req, res) {
  const enrollment_No=req.query.enrollment_No;
  res.render('S_Form',{enrollment_No});
}

async function handlerS_FormInsertData(req, res) {
  const enrollment_No = req.query.enrollment_No;
  try {
    const {
      first_Name,
      last_Name,
      email,
      date_of_birth,
      phone_no,
      address,
      city,
      state,
      zip,
      experience,
      degreeStatus,
      degreeName,
      university,
      Completionyear,
      cgpa,
      percentage,
      percentage_tech,
      percentage_inter,
      companyName,
      experienceCompany,
      jobType,
      startDate,
      endDate,
      tools,
      interpersonal,
      projectName,
      projectDes,
      semester,
      branch,
      projectTool,
      
    } = req.body;
    // Find the user by email
    const user = await Student_signup.findOne({enrollment_No});
        console.log(user);
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Define the new data to update
    const newData = {
      first_Name,
      last_Name,
      email,
      date_of_birth,
      phone_no,
      address,
      city,
      state,
      zip,
      experience,
      degreeStatus,
      degreeName,
      university,
      Completionyear,
      cgpa,
      percentage,
      percentage_tech,
      percentage_inter,
      companyName,
      experienceCompany,
      jobType,
      startDate,
      endDate,
      tools,
      interpersonal,
      projectName,
      projectDes,
      projectTool,
      semester,
      branch,
    };
    // Update the document with the new data
    const result = await client1.db('StudentPannel').collection('student_infos').updateOne(
      { _id: ObjectId.isValid(user.id) ? new ObjectId(user.id) : null }, // Filter for the document to update
      { $set: newData } // New data to add using $set operator
    );

    console.log(result);
    console.log(`${result.modifiedCount} document(s) updated`);
    res.send("Data updated successfully");
  }

  catch (error) {
  console.error("Error occurred while updating document:", error);
  res.status(500).send("Internal Server Error");
} 

}

// window.localStorage.
async function handlerForUploadFile(req, res) {
  const enrollment_No = req.body.enrollmentNo;
  const file = req.file;
  try {
    // Find the user by email
    const user = await Student_signup.findOne({ enrollment_No });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Read file data
    const data = fs.readFileSync(file.path, "utf8");

    // Update user document with file information
    const filter = { _id: user.id }; // Assuming _id is the MongoDB ObjectId
    const update = {
      ProjectOriginalName: file.originalname,
      Projectpath: file.path,
      ProjectmimeType: file.mimetype,
      data: data,
    };
    const options = { upsert: true };

    const result = await Student_signup.updateOne(filter, update, options);
    console.log(`${result.modifiedCount} document(s) updated`);

    res.status(200).json({ message: "File uploaded successfully", result });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
}
async function handlerUploadProfilePic(req, res) {

}

module.exports = {
  handlerS_FormInsertData,
  handlerS_Form,
  handlerForUploadFile,
  handlerUploadProfilePic,
};
