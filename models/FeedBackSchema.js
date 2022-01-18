const mongoose=require('mongoose')
const {Schema}=mongoose;

const StudentFeedBack=new Schema({
Name:{type:String},
Email: { type: String},
Subject: { type: String},
Message: { type: String},
authorId: { type: mongoose.Schema.Types.ObjectId, ref: "Student"}
})

module.exports=mongoose.model('StudentFeedBack',StudentFeedBack)