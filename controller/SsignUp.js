const Student_signup = require("../models/student.js");
// ../models/student.js
function handlerStudentpageSignUp(req, res) {
  return res.render("S_Sign_up");
}

function handleIndex(req, res) {
  return res.render('index')
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
  handleIndex,
  handlerStudentDataFromSignUp,
  handlerStudentpageSignUp,
};
