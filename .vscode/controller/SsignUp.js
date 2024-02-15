
const Student_signup = require('../../models/student.js');

async function  handlerStudentpage(req,res){
   res.render('S_Sign_up');

}

async function  handlerStudentDataFromSignUp(req,res){
    const newUserData=await req.body;
    Student_signup.insertMany(newUserData);
    return res.redirect("index");

}
module.exports={
    handlerStudentDataFromSignUp,
    handlerStudentpage,
}
