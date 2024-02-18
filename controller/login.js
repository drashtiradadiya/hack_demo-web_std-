const Student_signup = require("../models/student.js");
// const bcrypt=require("bcrypt");

const handlerStudentDataFromLogin = async(req, res) =>{
try {
        const { email, password } = req.body;
        const user = await Student_signup.findOne({ email });
        if (!Student_signup) {
            return res.status(404).json({ message: 'User not found' });
        }
        const validPassword = compare(password, user.password);//await bcrypt
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // Here you might generate a JWT token for authentication
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports={
    handlerStudentDataFromLogin, 
}