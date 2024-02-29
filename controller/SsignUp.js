const Student_signup = require("../models/student.js");
const express = require("express");

const ejs = require("ejs");


function handlerStudentpageSignUp(req, res) {
  return res.render("S_Sign_up");
}


const handlerStudentDataFromSignUp = async (req, res) => {
  const { first_Name, last_Name, password, confirm_password, email, enrollment_No } = await req.body;
  const ip = req.ip
 
  await Student_signup.create({
    first_Name,
    last_Name,
    password,
    confirm_password,
    enrollment_No,
    email,
    IpAddress: ip,
    profilePic: result.url
  });
  return res.status(200).json({ msg: 'OK' });
  
}
module.exports = {

  handlerStudentDataFromSignUp,
  handlerStudentpageSignUp,
};
