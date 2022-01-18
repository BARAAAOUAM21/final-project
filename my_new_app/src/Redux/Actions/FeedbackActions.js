import axios from "axios"
import { ADDFEEDBACK_FAIL, ADDFEEDBACK_REQUEST, ADDFEEDBACK_SUCCESS }from "../constants/FeedBack"

// Add Feddback

export const addfeddbackr=(userCred)=>async(dispatch)=>{
    try {
        dispatch({type:ADDFEEDBACK_REQUEST})  
        console.log(userCred)
        const {data}=await axios.post ("http://localhost:4001/feedBackAPI/addFeedBack",userCred)
        dispatch({type:ADDFEEDBACK_SUCCESS,payload:data})
        console.log("SIGNUPINSTRACTOR_SUCCESS")
    } catch (error) {
          dispatch({type:ADDFEEDBACK_FAIL})
console.log("error action")
    }
}
