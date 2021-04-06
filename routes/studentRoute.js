const express = require('express')
const auth = require('../middleware/auth');
//create a router
const router = new express.Router(); 

//import OwnerController 
const StudentController = require('../controllers/StudentContoller')

router.post('/reg',StudentController.reg)
router.post('/update/:id',auth, StudentController.updateinfo)
router.get('/display',auth,StudentController.studentlist) //here we use middleware 'auth'
module.exports = router

//commit first