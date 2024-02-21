const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema(
  {
    first_Name: {
      type: String,
      required: true,
    },
    last_Name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    enrollment_No: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    IpAddress: {
      type: String,
      required: true,
    },
    ProjectOriginalName: {
      type: String
    },
    Projectpath: {
      type: String
    },
    ProjectmimeType:{
      type:String
    },
    data: {
      type:Buffer
    },
  },
  { timestamps: true }
);
// Hash the password before saving the user
/*studentSchema.pre('save', async function (next) {
    const student = this;
    if (!student.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(student.password, salt);
        student.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});*/
const Student_signup = mongoose.model("student_info", studentSchema);

module.exports = Student_signup;
