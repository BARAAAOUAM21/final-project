
import {LOGIN_REQUEST,LOGIN_FAIL,LOGIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL, SIGNUPINSTRACTOR_REQUEST, SIGNUPINSTRACTOR_SUCCESS, SIGNUPINSTRACTOR_FAIL, LOUGOUT, UPDATEINSTRACTOR_REQUEST, UPDATEINSTRACTOR_SUCCESS, UPDATEINSTRACTOR_FAIL, GETINSTRACTOR_REQUEST, GETINSTRACTOR_SUCCESS, GETINSTRACTOR_FAIL, DELETEINSTRACTOR_REQUEST, DELETEINSTRACTOR_SUCCESS, DELETEINSTRACTOR_FAIL, GETALLINSTRACTOR_REQUEST, GETALLINSTRACTOR_SUCCESS, GETALLINSTRACTOR_FAIL}from "../constants/UserConstant"

// login reducer

export const loginReducer=(state={},action)=>{
      switch (action.type) {
      case LOGIN_REQUEST:
            return {loading:true}
      case LOGIN_SUCCESS:
            return {laoding:false, user:action.payload}
      case LOGIN_FAIL:
            return {loading:false,user:action.payload}
            case LOUGOUT:
                  return {}
              default:
                  return state
            
      
      }
}




// signup student reducer

export const signupReducer=(state={},action)=>{
      switch (action.type) {
      case SIGNUP_REQUEST:
            console.log("SIGNUP_REQUEST")
            return {loading:true}
      case SIGNUP_SUCCESS:
            console.log("SIGNUP_SUCCESS")
            return {loading:false, message:action.payload}
      case SIGNUP_FAIL:
            return {loading:false,error:"is not true"}

      default:
            return state;
      
      }
}


// signupinstractor  reducer

export const signupinstractorReducer=(state={},action)=>{
      switch (action.type) {
      case SIGNUPINSTRACTOR_REQUEST:
            console.log("SIGNUPINSTRACTOR_REQUEST")
            return {loading:true}
      case SIGNUPINSTRACTOR_SUCCESS:
            console.log("SIGNUPINSTRACTOR_SUCCESS")
            return {loading:false, message:action.payload}
      case SIGNUPINSTRACTOR_FAIL:
            return {loading:false,error:"is not true"}

      default:
            return state;
      
      }
}



// update rducer instractor

export const updateInstractorReducer = (state = {}, action) => {
      switch (action.type) {
        case UPDATEINSTRACTOR_REQUEST:
          console.log("instractor updated req");
          return { loading: true };
        case UPDATEINSTRACTOR_SUCCESS:
          console.log("insractor uptaded");
          console.log(action.payload);
          return { loading: false, user: action.payload };
    
        case UPDATEINSTRACTOR_FAIL:
          console.log("insractor not updated");
          return { loading: false, error: "server uptaded is down" };
        default:
          return state;
      }
    };


//     getinstractor reducer

export const getInstractorReducer = (state = {}, action) => {
      switch (action.type) {
        case GETINSTRACTOR_REQUEST:
          return { loading: true };
        case GETINSTRACTOR_SUCCESS:
          return { loading: false, user: action.payload };
        case GETINSTRACTOR_FAIL:
          return { loading: false, error: "server uptaded is down" };
        default:
          return state;
      }
    };


//     deleteinstractor reducer

export const deleteInstractorReducer = (state = {}, action) => {
      switch (action.type) {
        case DELETEINSTRACTOR_REQUEST:
          return { loading: true };
        case DELETEINSTRACTOR_SUCCESS:
          return { loading: false,deleteuser: action.payload };
        case DELETEINSTRACTOR_FAIL:
          return { loading: false, error: "server uptaded is down" };
        default:
          return state;
      }
    };

    //     getallinstractor reducer

export const getAllInstractorReducer = (state = {}, action) => {
      switch (action.type) {
        case GETALLINSTRACTOR_REQUEST:
          return { loading: true };
        case GETALLINSTRACTOR_SUCCESS:
          return { loading: false, user: action.payload };
        case GETALLINSTRACTOR_FAIL:
          return { loading: false, error: "server  is down" };
        default:
          return state;
      }
    };

