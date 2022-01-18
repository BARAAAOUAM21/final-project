import React, { useEffect } from "react";
import { useState } from "react";
import { DropdownButton, Dropdown, Form, FormCheck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Actions/UserActions";
import { useNavigate } from "react-router";
import Header from "../components/Header";

const Login = () => {
  const [cred, setCred] = useState({});
  const dispatch = useDispatch();
  let navigate=useNavigate()
  const handleSignIn = (e) => { 
    e.preventDefault();
    dispatch(login(cred));
  };
  const {user}=useSelector((state)=>state.loginDetails)
  useEffect(() => {
    if(user&&user.instractor){navigate(`/profile/${user.instractor._id}`)}
    else if(user&&user.student){navigate(`/profilestudent/${user.student._id}`)}
   
  }, [user])
  return (
    
    <div className="container-fluid ps-md-0">
            <Header/>

      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="loginjomla">Welcome back!</h3>
                  {/* Sign In Form */}
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) =>
                          setCred({ ...cred, email: e.target.value })
                        }
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) =>
                          setCred({ ...cred, password: e.target.value })
                        }
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="rememberPasswordCheck"
                      />
                 
                    </div>

                    <DropdownButton 
                      title="Dropdown button"
                      variant="secondary" 
                      style={{borderRadius:"10px"}}
                    >
                      <Dropdown.Item onClick={(e) =>
                          setCred({ ...cred, role:'instractorAPI' })}>INSTRACTOR</Dropdown.Item>
                      <Dropdown.Item onClick={(e) =>
                          setCred({ ...cred, role:'studentAPI'})}> 
                        STUDENT
                      </Dropdown.Item>
                     
                    </DropdownButton>
                   

                    

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        style={{borderRadius:"25px"}}

                        onClick={
                          handleSignIn
                        }
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
