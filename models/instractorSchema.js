const mongoose=require('mongoose')
const {Schema}=mongoose

const instractorSchema=new Schema({
      firstName: { type: String },
      lastName: { type: String },
      age: { type: Number },
      gender: { type: String },
      subject: { type: String },
      phoneNo: { type: Number },
      adress: { type: String },
      email: { type: String,required:true },
      password: { type: String,required:true},
      language:{type:String,required:true},
      photo: { type: String },
      // role:{type:String,default:"Instractor"},
      // listOfStudent:[{type:Schema.Types.ObjectId,ref:'students'}],
      listOfFeedBack:[{type:Schema.Types.ObjectId,ref:'StudentFeedBack'}]
})
module.exports=mongoose.model('instractors',instractorSchema)

