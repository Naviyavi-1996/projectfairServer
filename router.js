//import

const express = require('express')

//import userController
const userController=require('./controllers/userController')

//import add project controller
const projectController=require('./controllers/projectController')

//import jwiMiddleware
const jwtmiddleware=require('./middleware/jwtMiddleware')

//import multer
const multerConfig = require('./middleware/multerMiddleware')

//instance router
const router=new express.Router()

//REGISTER
router.post('/register',userController.register)


//login
router.post('/login',userController.login)


//add project
router.post('/add-project',jwtmiddleware,multerConfig.single("projectImage"),projectController.addProjectController)


//all project
router.get('/all-project',jwtmiddleware,projectController.getAllProjectController)


//home project
router.get('/home-project',projectController.getHomeProjectController)


//user project
router.get('/user-project',jwtmiddleware,projectController.getUserProjectController)


//remove userprojects
router.delete('/remove-user-project/:id',jwtmiddleware,projectController.removeUserProjectController)


//update user project
router.put('/update-userProject/:id',jwtmiddleware,multerConfig.single('projectImage'),projectController.editProjectController)

//update user profile
router.put('/update-userProfile', jwtmiddleware, multerConfig.single("profile"), userController.editProfileController)