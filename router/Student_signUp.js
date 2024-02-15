const express= require('express');
const router=express.Router();
const { handlerStudentDataFromSignUp, handlerStudentpage, handleIndex}=require('../controller/SsignUp');
router.get('/sign',handlerStudentpage)
router.get('/index', handleIndex)
router.post('/sign', handlerStudentDataFromSignUp);

module.exports=router;