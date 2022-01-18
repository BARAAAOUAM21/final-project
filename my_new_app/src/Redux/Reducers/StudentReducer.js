import { DELETESTUDENT_FAIL, DELETESTUDENT_REQUEST, DELETESTUDENT_SUCCESS, GETISTUDENT_REQUEST, GETSTUDENT_FAIL, GETSTUDENT_REQUEST, GETSTUDENT_SUCCESS, UPDATESTUDENT_FAIL, UPDATESTUDENT_REQUEST, UPDATESTUDENT_SUCCESS,  } from "../constants/StudentConstents"

// update rducer student

export const updateStudentReducer = (state = {}, action) => {
      switch (action.type) {
        case UPDATESTUDENT_REQUEST:
          console.log("student updated req");
          return { loading: true };
        case UPDATESTUDENT_SUCCESS:
          console.log("student uptaded");
          console.log(action.payload);
          return { loading: false, user: action.payload };
    
        case UPDATESTUDENT_FAIL:
          console.log("student not updated");
          return { loading: false, error: "server uptaded is down" };
        default:
          return state;
      }
    };


    //     getstudent reducer

export const getStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case GETSTUDENT_REQUEST:
      return { loading: true };
    case GETSTUDENT_SUCCESS:
      return { loading: false, user: action.payload };
    case GETSTUDENT_FAIL:
      return { loading: false, error: "server uptaded is down" };
    default:
      return state;
  }
};

//     deletestudent reducer

export const deleteStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETESTUDENT_REQUEST:
      return { loading: true };
    case DELETESTUDENT_SUCCESS:
      return { loading: false, deleteuser: action.payload };
    case DELETESTUDENT_FAIL:
      return { loading: false, error: "server uptaded is down" };
    default:
      return state;
  }
};

