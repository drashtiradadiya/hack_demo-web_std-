const Student_signup = require("../models/student.js");

const ejs = require('ejs');

// const crypto = require('crypto');
function handlerStudentpageLogin(req, res) {
    return res.render("S_Login");
}
//  function handleIndex1(req,res) {
//     return res.render('index')
//   }

const handlerStudentDataFromLogin = async (req, res) => {
    try {
        const { password ,enrollment_No} = await req.body;
        const user = await Student_signup.findOne({ enrollment_No: enrollment_No });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // const validPassword = compare(password, user.password);//await bcrypt
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // Here you might generate a JWT token for authentication
        res.status(200).json({ message: 'Login successful' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    const {enrollment_No} = req.body;
    console.log('Received data:', req.body);  // Extract the ID from the request body
};

module.exports = {
    handlerStudentDataFromLogin,
    handlerStudentpageLogin,
    // handleIndex1
}