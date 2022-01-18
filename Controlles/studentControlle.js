const students=require("../models/studentSchema")
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const instractor=require('../models/instractorSchema')



//add student
const addNewStudent=async(req,res)=>{
      try {
            const {email,password,confirmPassword}=req.body
            const student=await students.findOne({email})
            if (student){
            return res.status(400).json({message:'student already exists'})
            } else {

            const hashed=await bcrypt.hash(password,saltRounds)
            const hashedconfirm= await bcrypt.hash(confirmPassword,saltRounds)
            const newStudent=new students({...req.body,password:hashed,confirmPassword:hashedconfirm})
if(password===confirmPassword){
      await newStudent.save() 
return res.status(200).json({message:'student added successfully',newStudent})
}
return res.status(400).json({message:'check your password',newStudent})

            console.log('new',newStudent)

           
            }
      } catch (error) {
            return res.status(400).json({message:"is not true"})
      }
}

//get students
const getAllThem=async(req,res)=>{
      try {
      const getStudent=await students.find()
      return res.json({message:'student get it successfully', getStudent})    
      } catch (error) {
            return res.json({message:error})

      }
}

//get onestudent
const getoneofthem=async(req,res)=>{
      try {
      const getoneofthem=await students.findById(req.params.id)
      return res.json({message:'student found successfully',getoneofthem})
      } catch (error) {
      return res.json({message:error})

      }
}
//  deletestudent
const deletestudent =async(req,res)=>{
      try {
      await students.findByIdAndDelete(req.params.id)
      return res.json({message:'student deleted successfully'})
      } catch (error) {
      return res.json({message:error})

      }
      
}
//updatestudent
const updatestudent=async(req,res)=>{
      try {
      const updatestudent=await students.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
      return res.json({message:'student updated successfully',updatestudent})
      } catch (error) {
      return res.json({message:error})

      }
}
// login
const login=async(req,res)=>{
      try {
      const {email,password}=req.body
      const student= await students.findOne({email})
      console.log(email)
      if (!student){
            return res.json({message:'bad credentials'})
      }else {
            const match=await bcrypt.compare(password, student.password)
            console.log(match)
            if (!match){
                  return res.json({message:'bad credentials'}) 
            } else {
                  var token =  jwt.sign({ id: student._id }, process.env.privateKey);
                  console.log(token)
                  return res.json({message:'student loggedIn successfully',student:student,token})

            }
      }
      } catch (error) {
      return res.json({message:error})
      }
}


module.exports={addNewStudent,getAllThem,getoneofthem,deletestudent,updatestudent,login}