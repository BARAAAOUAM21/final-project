const express=require('express')
const Router=express.Router()
const {addNewFeedBack, updateFeedBack, deleteFeedBack, getFeedBack}=require('../Controlles/FeedBackControlle')
const studentMiddelware=require('../Mmiddelewears/studentMiddeleware')

Router.post('/addFeedBack',addNewFeedBack)
Router.put('/updateFeedBack/:id',studentMiddelware,updateFeedBack)
Router.delete('/deleteFeedBack/:id',studentMiddelware,deleteFeedBack)
Router.get('/getFeedBack/:id',getFeedBack)

module.exports=Router