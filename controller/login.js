const Student_signup = require("../models/student.js");
const popup = require('node-popup');
// import{alert} from 'node-popup';
const ejs = require('ejs');

// const crypto = require('crypto');
function handlerStudentpageLogin(req, res) {
    return res.render("S_Login");
}

const handlerStudentDataFromLogin = async (req, res) => {
    try {
        const { email, enrollment_No, password } = await req.body;
        const user = await Student_signup.findOne({ enrollment_No });
        console.log(user.password === password);
        console.log(user.email === email);

        if (!user) {
            // alert("You have not signed up!")
            return res.status(404).json({ message: 'User not found' });
        }
        
        if ((user.email === email) && (user.password === password)) {
            // console.log("hi if ")
            // res.json("notExit");
            res.status(200).json({ message: 'Login successful' });
        }
        else {
            console.log("hi else")
            res.json("exit");
            // return res.send("Invalid Login Details! ");
        }

    }
    catch (error) {
        res.status(400).send('Invaild Login Details');
    }
};

module.exports = {
    handlerStudentDataFromLogin,
    handlerStudentpageLogin,

}