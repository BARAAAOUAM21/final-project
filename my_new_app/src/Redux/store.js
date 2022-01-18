import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {  deleteInstractorReducer, getAllInstractorReducer, getInstractorReducer, loginReducer, signupinstractorReducer, signupReducer, updateInstractorReducer } from "./Reducers/UserReducer";
import { deleteStudentReducer, getStudentReducer, updateStudentReducer } from "./Reducers/StudentReducer";
import { addfeedbackReducer } from "./Reducers/FeddBackReducer";


const reducer=combineReducers({
      loginDetails:loginReducer,
      signup:signupReducer,
      signupinstractor:signupinstractorReducer,
      updateInstractor:updateInstractorReducer,
      getInstractor:getInstractorReducer,
      updateStudent:updateStudentReducer,
      getStudent:getStudentReducer,
      deleteInstractor:deleteInstractorReducer,
      deleteStudent:deleteStudentReducer,
      getAllInstractor:getAllInstractorReducer,
      addfeedback:addfeedbackReducer
      

})
const fromLocalStorage=localStorage.getItem('cred') ? JSON.parse(localStorage.getItem('cred')) : null


const initState={
loginDetails:{user:fromLocalStorage}    
}

const store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(thunk)))


export default store
