
// login instractor
import axios from "axios"
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL, SIGNUPINSTRACTOR_REQUEST, SIGNUPINSTRACTOR_SUCCESS, SIGNUPINSTRACTOR_FAIL, LOUGOUT, UPDATEINSTRACTOR_REQUEST, UPDATEINSTRACTOR_SUCCESS, UPDATEINSTRACTOR_FAIL, GETINSTRACTOR_REQUEST, GETINSTRACTOR_SUCCESS, GETINSTRACTOR_FAIL, DELETEINSTRACTOR_REQUEST, DELETEINSTRACTOR_SUCCESS, DELETEINSTRACTOR_FAIL, GETALLINSTRACTOR_REQUEST, GETALLINSTRACTOR_SUCCESS, GETALLINSTRACTOR_FAIL}from "../constants/UserConstant"




export const login=(userCred)=>async(dispatch)=>{
      try {
          dispatch({type:LOGIN_REQUEST}) 
           
          const {data}=await axios.post (`http://localhost:4001/${userCred.role}/login`,userCred)
          console.log(data)
          localStorage.setItem('cred',JSON.stringify(data))
          dispatch({type:LOGIN_SUCCESS,payload:data})
      } catch (error) {
            dispatch({type:LOGIN_FAIL,})    
      }
}

export const lougout = () => (dispatch) => {
      dispatch({ type: LOUGOUT });
      localStorage.removeItem("cred");
    };







// student signup

export const signUp=(userCred)=>async(dispatch)=>{
      try {
          dispatch({type:SIGNUP_REQUEST})  
          console.log("SIGNUP_REQUEST")
          const {data}=await axios.post ("http://localhost:4001/studentAPI/addNewStudent",userCred)
          dispatch({type:SIGNUP_SUCCESS,payload:data})
          console.log("SIGNUP_SUCCESS")
      } catch (error) {
            dispatch({type:SIGNUP_FAIL})  
console.log("error action")
      }
}


// instractor signup

export const signupinstractor=(userCred)=>async(dispatch)=>{
      try {
          dispatch({type:SIGNUPINSTRACTOR_REQUEST})  
          console.log(userCred)
          const {data}=await axios.post ("http://localhost:4001/instractorAPI/addnewinstractor",userCred)
          dispatch({type:SIGNUPINSTRACTOR_SUCCESS,payload:data})
          console.log("SIGNUPINSTRACTOR_SUCCESS")
      } catch (error) {
            dispatch({type:SIGNUPINSTRACTOR_FAIL})  
console.log("error action")
      }
}





//   update  instractor

export const updateInstarctor = (id,newcred) => async (dispatch,getState) => {
      try {
        dispatch({ type: UPDATEINSTRACTOR_REQUEST });
        const {loginDetails:{user}}=getState()
        const config={headers:{auth:user.token}}
        console.log(config)
        const { data } = await axios.put(`http://localhost:4001/instractorAPI/updateinstractor/${id}`,newcred,config);
        console.log(newcred);
        dispatch({ type: UPDATEINSTRACTOR_SUCCESS, payload: data });
      } catch (error) {
        console.log('fail');
    
        dispatch({ type: UPDATEINSTRACTOR_FAIL });
      }
    };

//     Get instractor 

export const getInstarctor = (id) => async (dispatch) => {
      try {
        dispatch({ type: GETINSTRACTOR_REQUEST });
        
        const { data } = await axios.get(`http://localhost:4001/instractorAPI/getoneofthem/${id}`);
        console.log(data)
        dispatch({ type: GETINSTRACTOR_SUCCESS, payload: data });
      } catch (error) {
        console.log('fail');
        dispatch({ type: GETINSTRACTOR_FAIL });
      }
    };

//      Delete instractor 

export const deleteInstarctor = (id) => async (dispatch,getState) => {
      try {
        dispatch({ type: DELETEINSTRACTOR_REQUEST });
        const {loginDetails:{user}}=getState()
        const config={headers:{auth:user.token}}
        console.log(config)
        const { data } = await axios.delete(`http://localhost:4001/instractorAPI/deleteinstractor/${id}`,config);
        localStorage.removeItem("cred")
        console.log(data)
        dispatch({ type: DELETEINSTRACTOR_SUCCESS, payload: data });
      } catch (error) {
        console.log('fail');
        dispatch({ type: DELETEINSTRACTOR_FAIL });
      }
    };

    //     Get all instractor 

export const getAllInstarctor = () => async (dispatch) => {
  try {
    dispatch({ type: GETALLINSTRACTOR_REQUEST });
    
    const { data } = await axios.get("http://localhost:4001/instractorAPI/getAllThem/");
    console.log(data)
    dispatch({ type: GETALLINSTRACTOR_SUCCESS, payload: data });
  } catch (error) {
    console.log('fail');
    dispatch({ type: GETALLINSTRACTOR_FAIL });
  }
};