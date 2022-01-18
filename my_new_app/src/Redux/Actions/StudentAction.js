import axios from "axios"
import{ DELETESTUDENT_FAIL, DELETESTUDENT_REQUEST, DELETESTUDENT_SUCCESS, GETSTUDENT_FAIL, GETSTUDENT_REQUEST, GETSTUDENT_SUCCESS, UPDATESTUDENT_FAIL, UPDATESTUDENT_REQUEST, UPDATESTUDENT_SUCCESS }from "../constants/StudentConstents"

// update student 
export const updateStudent = (id,newcred) => async (dispatch,getState) => {
      try {
        dispatch({ type: UPDATESTUDENT_REQUEST});
        const {loginDetails:{user}}=getState()
        const config={headers:{auth:user.token}}
        console.log(config)
        const { data } = await axios.put(`http://localhost:4001/studentAPI/updatestudent/${id}`,newcred,config);
        console.log(newcred);
        dispatch({ type: UPDATESTUDENT_SUCCESS, payload: data });
      } catch (error) {
        console.log('fail');
    
        dispatch({ type: UPDATESTUDENT_FAIL });
      }
    };


    //     Get student 

export const getStudent = (id) => async (dispatch) => {
  try {
    dispatch({ type: GETSTUDENT_REQUEST });
    const { data } = await axios.get(`http://localhost:4001/studentAPI/getoneofthem/${id}`);
    console.log(data)
    dispatch({ type: GETSTUDENT_SUCCESS, payload: data });
  } catch (error) {
    console.log('fail');
    dispatch({ type: GETSTUDENT_FAIL });
  }
};

//      Delete student 

export const deleteStudent = (id) => async (dispatch,getState) => {
  try {
    dispatch({ type: DELETESTUDENT_REQUEST });
    const {loginDetails:{user}}=getState()
    const config={headers:{auth:user.token}}
    console.log(config)
    const { data } = await axios.delete(`http://localhost:4001/studentAPI/deletestudent/${id}`,config);
    localStorage.removeItem("cred")
    console.log(data)
    dispatch({ type: DELETESTUDENT_SUCCESS, payload: data });
  } catch (error) {
    console.log('fail');
    dispatch({ type: DELETESTUDENT_FAIL });
  }
};