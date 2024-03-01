const mongoose = require("mongoose");
const validator = require("validator");
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
      lowercase: true,
      validate: [validator.isEmail, "Please Enter a vaild email."],
    },
    enrollment_No: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20,
    },
    confirm_password: {
      type: String,
      required: [true, "Please Confirm your password."],
      validate: {
        //
        validator: function (val) {
          return val == this.password;
        },
        message: "Password and Confirm password does not match.",
      },
    },
    IpAddress: {
      type: String,
      required: true,
    },
    ProjectOriginalName: {
      type: String,
    },
    Projectpath: {
      type: String,
    },
    ProjectmimeType: {
      type: String,
    },
    data: {
      type: Buffer,
    },
    date_of_birth: {
      type: Number,
    },
    phone_no: {
      type: Number,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: Number,
    },
    experience: {
      type: Number,
    },
    degreeStatus: {
      type: String,
    },
    degreeName: {
      type: String,
    },
    university: {
      type: String,
    },
    Completionyear: {
      type: Number,
    },
    cgpa: {
      type: Number,
    },
    percentage: {
      type: Number,
    },
    companyName: {
      type: String,
    },
    experienceCompany: {
      type: Number,
    },
    jobType: {
      type: String,
    },
    startDate: {
      type: Number,
    },
    endDate: {
      type: Number,
    },
    interpersonal: {
      type: String,
    },
    projectName: {
      type: String,
    },
    projectDes: {
      type: String,
    },
    projectTool: {
      // type: [String], // Assuming projectTool is an array of strings
      // default: [],
      type: String,
      // name: String,
      // selectedOptions: [String],
    },
    semester: {
      type: Number,
    },
    branch: {
      type: String,
    },
    percentage_inter: {
      type: Number,
    },
    percentage_tech: {
      type: Number,
    },
    tools: {
      type: String,
    },
  },
  { timestamps: true }
);
// Hash the password before saving the user
// studentSchema.pre('save', async function (next) {
//     const student = this;
//     if (this.isModified('password')) return next();

//     bcrypt.hash(this.password, 12)
// });
const Student_signup = mongoose.model("student_info", studentSchema);

module.exports = Student_signup;
