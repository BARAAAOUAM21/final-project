const mongoose=require('mongoose')
const {Schema}=mongoose

const studentSchema=new Schema({
      firstName: { type: String },
      lastName: { type: String },
      age: { type: Number },
      gender: { type: String },
      subject: { type: String },
      phoneNo: { type: Number },
      adress: { type: String },
      email: { type: String, required:true },
      password: { type: String,required:true  },
confirmPassword:{ type: String,required:true },
// WhatDoYouWantToLearn :{type: String}
})
module.exports=mongoose.model('students',studentSchema)