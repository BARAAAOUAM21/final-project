var jwt = require('jsonwebtoken');
const students=require('../models/studentSchema')

const studentMiddleware=async(req,res,next)=>{
try {
      const token=req.headers['auth']
      if(!token){
            return res.json({message:'not authorized'})
      } else {
            var decoded =jwt.verify(token, process.env.privateKey)
            const student=await students.findById(decoded.id)
            if (!student){
            return res.json({message:'not authorized'})
            }
            next()
      }
      
} catch (error) {
      return res.json({message:error})
}
}

module.exports=studentMiddleware