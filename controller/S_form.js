const Student_signup = require("../models/student.js");
const { MongoClient, ObjectId } = require("mongodb");
const fs = require("fs");
const path = require("path");

// Database Name
const uri = "mongodb://localhost:27017";
const dbName = "StudentPannel";

// Create a new MongoClient
const client = new MongoClient(uri);

async function handlerS_Form(req, res) {
  // const enrollment_No = req.query;

   // Find the user by enrollment_No
  //  const user = await Student_signup.findOne({ enrollment_No });
  //  console.log(user);
  // console.log(enrollment_No);
  // if (!user) {
  //   return res.status(404).send('User not found');
  // }
   res.render('S_Form');
}

async function handlerS_FormInsertData(req, res) {
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
      companyName,
      experienceCompany,
      jobType,
      startDate,
      endDate,
      tool,
      interpersonal,
      projectName,
      projectDes,
      projectTool,
    } = req.body;

    // Find the user by email
    const user = await Student_signup.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Connect to the MongoClient
    await client.connect();

    // Get the database
    const db = client.db(dbName);
    console.log(`Connected to database: ${dbName}`);

    // Define the collection
    const collection = db.collection("student_infos");

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
      companyName,
      experienceCompany,
      jobType,
      startDate,
      endDate,
      tool,
      interpersonal,
      projectName,
      projectDes,
      projectTool,
    };

    // Update the document with the new data
    const result = await collection.updateOne(
      { _id: ObjectId.isValid(user.id) ? new ObjectId(user.id) : null }, // Filter for the document to update
      { $set: newData } // New data to add using $set operator
    );

    console.log(`${result.modifiedCount} document(s) updated`);
    res.send("Data updated successfully");
  } catch (error) {
    console.error("Error occurred while updating document:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    // Close the connection
    await client.close();
  }
}


// window.localStorage.
async function handlerForUploadFile  (req, res)  {
  const enrollment_No= req.body.enrollmentNo;
    console.log(enrollment_No);
    const file = req.file;
    // console.log(file)
  //   console.log("try1");
    // console.log(req.body/);
    // console.log(file);
 try {
        // Find the user by email
        const user = await Student_signup.findOne({enrollment_No});
        console.log(user);
        console.log("try2");
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Read file data
        const data = fs.readFileSync(file.path, 'utf8');

        // Update user document with file information
        const filter = { _id: user.id }; // Assuming _id is the MongoDB ObjectId
        const update = {
            ProjectOriginalName: file.originalname,
            Projectpath: file.path,
            ProjectmimeType: file.mimetype,
            data: data,
        };
        console.log("try3");
        const options = { upsert: true };
    
        const result = await Student_signup.updateOne(filter, update, options);
        console.log(`${result.modifiedCount} document(s) updated`);

        res.status(200).json({ message: 'File uploaded successfully', result });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Internal Server Error', error });

    }
}

module.exports = {
  handlerS_FormInsertData,
  handlerS_Form,
  handlerForUploadFile,
};
