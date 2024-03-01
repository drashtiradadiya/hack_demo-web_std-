const Student_signup = require("../models/student.js");
const express = require("express");



  async function handlerIndex(req, res) {
    const { enrollment_No } = req.query;
     
    // Find the user by enrollment_No
    const user = await Student_signup.findOne({ enrollment_No });
  
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.render('index', { user });
  }
  async function handlerUpdate(req,res){
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
      const result = collection.updateOne(
        { _id: ObjectId.isValid(user.id) ? new ObjectId(user.id) : null }, // Filter for the document to update
        { $set: newData } // New data to add using $set operator
      );
  
      console.log(`${result.modifiedCount} document(s) updated`);
      res.send("Data updated successfully");
    }
  
    catch (error) {
    console.error("Error occurred while updating document:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    // Close the connection
    await client.close();
  }

  }
  module.exports = {
    handlerIndex,
    handlerUpdate
  };