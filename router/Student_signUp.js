const express = require("express");
const router = express.Router();
const ejs = require("ejs");

const {
  handlerStudentDataFromSignUp,
  handlerStudentpageSignUp,
} = require("../controller/SsignUp");
const {
  handlerStudentDataFromLogin,
  handlerStudentpageLogin,
} = require("../controller/login");
const {
  handlerS_Form,
  handlerS_FormInsertData,
} = require("../controller/S_form");
const {
  handlerIndex,
  handlerUpdate
} = require("../controller/control_index");

router.get("/", handlerStudentpageSignUp);
router.get("/index", handlerIndex);
router.post("/", handlerStudentDataFromSignUp);
router.get("/login", handlerStudentpageLogin);
router.post("/login", handlerStudentDataFromLogin);
router.get("/S_Form", handlerS_Form);
router.post("/S_Form", handlerS_FormInsertData);
router.patch("/update", handlerUpdate);




module.exports = router;
