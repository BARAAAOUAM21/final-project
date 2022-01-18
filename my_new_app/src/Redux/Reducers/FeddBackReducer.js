
import { ADDFEEDBACK_FAIL, ADDFEEDBACK_REQUEST, ADDFEEDBACK_SUCCESS } from "../constants/FeedBack"


// add feedback reducer

export const addfeedbackReducer=(state={},action)=>{
    switch (action.type) {
    case ADDFEEDBACK_REQUEST:
          console.log("ADDFEEDBACK_REQUEST")
          return {loading:true}
    case ADDFEEDBACK_SUCCESS:
          console.log("ADDFEEDBACK_SUCCESS")
          return {loading:false, message:action.payload}
    case ADDFEEDBACK_FAIL:
          return {loading:false,error:"is not true"}

    default:
          return state;
    
    }
}