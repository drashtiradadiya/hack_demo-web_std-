const Student_signup = require("../models/student.js");
const express = require("express");
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-creator-node')
// const PDFDocument = require('pdfkit');
// MongoDB connection URI
const { MongoClient, ObjectId } = require("mongodb");
const { log } = require("handlebars");
const uri = 'mongodb://localhost:27017/StudentPannel';
const client1 = new MongoClient(uri);

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
  try {
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

const generatePdf = async (req, res, next) => {
  const enrollment_No = req.query.enrollment_No;
  console.log(enrollment_No);
  const user = await Student_signup.findOne({ enrollment_No });

  const ejs = fs.readFileSync(path.join(__dirname, '../views/cv.ejs'), 'utf-8');
  const filename = Math.random() + '_doc' + '.pdf';
    // const html = ejs.render(ejsTemplate, { user });
  const options = {
    format: 'A4',
    orientation: 'portrait',
    border: '10mm'
  };
  const document = {
    ejs: ejs,
    options: options,
    path: './docs/' + filename
  }
  pdf.create(document)
    .then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  const filepath = 'http://localhost:8001/docs/' + filename;
//  const inputejsPath=path.join(./docs,'c.ejs');
//  const outputjsPath=path.join(./docs,'cv.ejs');

  res.render('cv', {
    path: filepath, user
  });
}




async function handlerDownloadCV(req, res) {
  const enrollment_No = req.query.enrollment_No;
  console.log(enrollment_No);
  const user = await Student_signup.findOne({ enrollment_No });
  return res.render('cv');
}



module.exports = {
  handlerIndex,
  handlerUpdate,
  handlerDownloadCV,
  generatePdf
};