const Student_signup = require("../models/student.js");
const express = require("express");
// MongoDB connection URI
const { MongoClient, ObjectId } = require("mongodb");
const uri = 'mongodb://localhost:27017/StudentPannel';
const client1= new MongoClient(uri);

async function handlerIndex(req, res) {
  const { enrollment_No } = req.query;

  // Find the user by enrollment_No
  const user = await Student_signup.findOne({ enrollment_No });

  if (!user) {
    return res.status(404).send('User not found');
  }
  res.render('index', { user });
}


async function handlerUpdate(req, res) {
  try{
  const enrollment_No = req.query.enrollment_No;

  const {
    first_Name,
    last_Name,
    email,
    date_of_birth,
    phone_no,
    address,
    experience,
    university,
    Completionyear,
    cgpa,
    companyName,
    experienceCompany,
    jobType,
    startDate,
    endDate,
    tool,
    interpersonal,
    percentage_tech,
    percentage_inter,
    certificate,
    domain
  } = req.body;

  // Find the user by email
  const user = await Student_signup.findOne({ enrollment_No });
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
    experience,
    university,
    Completionyear,
    cgpa,
    companyName,
    percentage_inter,
    percentage_tech,
    experienceCompany,
    jobType,
    startDate,
    endDate,
    tool,
    interpersonal,
    certificate,
    domain,

  };



  const result = await client1.db('StudentPannel').collection('student_infos').updateOne(
      { _id: ObjectId.isValid(user.id) ? new ObjectId(user.id) : null }, // Filter for the document to update
      { $set: newData } // Update fields specified in the request body
    );
    // Check if the document was found and updated
    console.log(`${result.modifiedCount} document(s) updated`);
    res.send("Data updated successfully");
  }
  catch (err) {
    console.error('Error updating user info:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
  // Update the document with the new data


  finally {
    // Close the connection
    await client1.close();
  }

}
module.exports = {
  handlerIndex,
  handlerUpdate
};