const mongoose = require("mongoose");
const validator = require("validator")
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
      validate: [validator.isEmail, 'Please Enter a vaild email.']
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
      maxlength: 20
    },
    confirm_password: {
      type: String,
      required: [true, 'Please Confirm your password.'],
      validate: {
        //
        validator: function (val) {
          return val == this.password;
        },
        message: 'Password and Confirm password does not match.'
      }
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
    ProjectmimeType: {
      type: String
    },
    data: {
      type: Buffer
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
