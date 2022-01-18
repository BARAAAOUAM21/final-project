const express = require('express')
const connectDB=require('./config/connectDB')
const app =express()
require('dotenv').config()
app.use(express.json())   
const cors =require('cors')

app.use(cors())
app.use('/instractorAPI',require('./Routes/instractorRoutes'))
app.use('/studentAPI',require('./Routes/studentRoutes'))
app.use('/feedBackAPI',require('./Routes/feedBackRouter'))

connectDB()
const PORT=(process.env.port)  || 4001
app.listen(PORT,()=>console.log(`server listening on port ${PORT} `))   
