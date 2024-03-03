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

    date_of_birth: {
      type: Number,
    },
    phone_no: {
      type: Number,
    },
    address: {
      type: String,
    },


    ProjectOriginalName: {
      type: String,
    },
    Projectpath: {
      type: String,
    },
    ProjectmimeType: {
      type: String,
    }, city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: Number,
    },
    IpAddress: {
      type: String,
      required: true,
    },

    degreeName: {
      type: String,
    },
    semester: {
      type: Number,
    },
    branch: {
      type: String,
    },
    degreeStatus: {
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


    jobType: {
      type: String,
    },
    experience: {
      type: Number,
    },
    companyName: {
      type: String,
    },
    experienceCompany: {
      type: Number,
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
    tools: {
      type: String,
    },
    project: [
      {
        projectName: {
          type: String,
        },
        projectDes: {
          type: String,
        },
        projectTool: [
          
        ]
      }
    ],
    data: {
      type: Buffer,
    },
    percentage_inter: {
      type: Number,
    },
    percentage_tech: {
      type: Number,
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
