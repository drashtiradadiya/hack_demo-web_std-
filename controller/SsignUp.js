const Student_signup = require("../models/student.js");
const express = require("express");

const ejs = require("ejs");

function handlerStudentpageSignUp(req, res) {
  return res.render("S_Sign_up");
}
 async function handlerIndex(req, res) {
    const {enrollment_No } = req.query;
    console.log(enrollment_No); 

        // Find the user by enrollment_No
    const user = await Student_signup.findOne({ enrollment_No });

    if (!user) {
      return res.status(404).send('User not found');
  }
  console.log(user);
    res.render('index',{user});
}

const handlerStudentDataFromSignUp = async (req, res) => {
  const { first_Name, last_Name, password, confirm_password, email, enrollment_No } = await req.body;
  const ip = req.ip
  // console.log(first_Name);
  await Student_signup.create({
    first_Name,
    last_Name,
    password,
    confirm_password,
    enrollment_No,
    email,
    IpAddress: ip

  });
  return res.status(200).json({ msg: 'OK' });
}
module.exports = {
  handlerIndex,
  handlerStudentDataFromSignUp,
  handlerStudentpageSignUp,
};
