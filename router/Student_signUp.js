const express= require('express');
const router=express.Router();
const { handlerStudentDataFromSignUp, handlerStudentpage, handleIndex,}=require('../controller/SsignUp');
const { handlerStudentDataFromLogin}=require('../controller/login');
router.get('/sign',handlerStudentpage)
router.get('/index', handleIndex)
router.post('/sign', handlerStudentDataFromSignUp);
router.get('/login', handlerStudentDataFromLogin);
router.post('/login', handlerStudentDataFromLogin);


module.exports=router;