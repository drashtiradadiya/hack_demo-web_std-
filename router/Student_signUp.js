const express= require('express');
const router=express.Router();
const { handlerStudentDataFromSignUp, handlerStudentpageSignUp, handleIndex,}=require('../controller/SsignUp');
const { handlerStudentDataFromLogin,handleIndex1,handlerStudentpageLogin}=require('../controller/login');
router.get('/sign',handlerStudentpageSignUp)
router.get('/index', handleIndex)
router.post('/sign', handlerStudentDataFromSignUp);
router.get('/login', handlerStudentpageLogin);
router.get('/index', handleIndex1);
router.post('/login', handlerStudentDataFromLogin);


module.exports=router;