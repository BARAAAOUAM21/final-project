const {addNewStudent,getAllThem,getoneofthem,deletestudent,updatestudent,login}=require('../Controlles/studentControlle')
const studentMiddleware=require("../Mmiddelewears/studentMiddeleware")

const express = require('express')
const Router=express.Router()

Router.post('/addNewStudent',addNewStudent)
Router.post('/login',login)
Router.get('/getAllThem',getAllThem)
Router.get('/getoneofthem/:id',getoneofthem)
Router.delete('/deletestudent/:id',studentMiddleware, deletestudent)
Router.put('/updatestudent/:id',studentMiddleware, updatestudent)




module.exports=Router