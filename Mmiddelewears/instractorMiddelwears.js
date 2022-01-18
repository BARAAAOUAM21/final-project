var jwt = require('jsonwebtoken');
const instractors=require('../models/instractorSchema')

const instractorMiddleware=async(req,res,next)=>{
try {
      const token=req.headers['auth']
      if(!token){
            return res.json({message:'not authorized'})
      } else {
            var decoded =jwt.verify(token, process.env.privateKey)
            const instractor=await instractors.findById(decoded.id)
            if (!instractor){
            return res.json({message:'not authorized'})
            }
            next()
      }
      
} catch (error) {
      return res.json({message:error})
}
}

module.exports=instractorMiddleware