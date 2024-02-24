
const express= require('express');
const router=express.Router();
const ejs=require("ejs")


const { handlerStudentDataFromSignUp, handlerStudentpageSignUp, handlerIndex }=require('../controller/SsignUp');
const { handlerStudentDataFromLogin,handlerStudentpageLogin}=require('../controller/login');
const {handlerS_Form, handlerS_FormInsertData}=require('../controller/S_form');





router.get('/',handlerStudentpageSignUp)
router.get('/index', handlerIndex);
router.post('/', handlerStudentDataFromSignUp);
router.get('/login', handlerStudentpageLogin);
router.post('/login', handlerStudentDataFromLogin);
router.get('/S_Form',handlerS_Form);
router.post('/S_Form', handlerS_FormInsertData);

// router.post('/index', handleIndexPost);


module.exports=router;
