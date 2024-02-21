
const express= require('express');
const router=express.Router();


const { handlerStudentDataFromSignUp, handlerStudentpageSignUp, handleIndex}=require('../controller/SsignUp');
const { handlerStudentDataFromLogin,handlerStudentpageLogin}=require('../controller/login');
const {handleS_Form, handleS_FormInsertData}=require('../controller/S_form');



router.get('/',handlerStudentpageSignUp)
router.get('/index', handleIndex)
router.post('/', handlerStudentDataFromSignUp);
router.get('/login', handlerStudentpageLogin);
router.post('/login', handlerStudentDataFromLogin);
router.get('/S_Form',handleS_Form);
router.post('/S_Form', handleS_FormInsertData);

module.exports=router;
