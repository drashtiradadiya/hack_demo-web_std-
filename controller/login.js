const Student_signup = require("../models/student.js");
const popup = require('node-popup');
const ejs = require('ejs');

// const crypto = require('crypto');
 function handlerStudentpageLogin(req, res) {
    return res.render("S_Login");
}

const handlerStudentDataFromLogin = async(req,res) => {
    try {
        const {email, enrollment_No, password} = req.body;
       const user = await Student_signup.findOne({ enrollment_No, email, password});

        if(!user) {
            return res.status(401).json(
                {message: 'User not find'}
            )
        }

        if(user.email === email && user.password === password && user.enrollment_No == enrollment_No) {
            return res.status(200).json({message: 'Login Successfully'})
        }

        return res.status(400).json({message : 'Not found'})

    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    handlerStudentDataFromLogin,
    handlerStudentpageLogin,

}