import { signupinstractor } from "../Redux/Actions/UserActions";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Alert, Button } from "react-bootstrap";

function SignUpInstractor() {
  const [cred, setCred] = useState({});
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleSignUp = () => {
    dispatch(signupinstractor(cred));
  };
  const { user } = useSelector((state) => state.loginDetails);
  const [show, setShow] = useState(true);
  const { loading, message } = useSelector((state) => state.signupinstractor);
  useEffect(() => {
    if (user) {
      navigate(`/profile/${user.instractor._id}`);
    }
  }, [user]);
  return (
    <div>
      <Header />
      {loading && "loading"}
      {message && (
        <Alert show={show} variant="success">
          <Alert.Heading>
            {" "}
            <p>{message.message}</p>
          </Alert.Heading>

          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
      )}

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
              />
            
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">firstName</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setCred({ ...cred, firstName: e.target.value })
                    }
                    className="form-control"
                    placeholder="firstName"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">lastName</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setCred({ ...cred, lastName: e.target.value })
                    }
                    className="form-control"
                    placeholder="lastName"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">age</label>
                  <input
                    type="text"
                    onChange={(e) => setCred({ ...cred, age: e.target.value })}
                    className="form-control"
                    placeholder="age"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">gender</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setCred({ ...cred, gender: e.target.value })
                    }
                    className="form-control"
                    placeholder="gender"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="subject"
                    onChange={(e) =>
                      setCred({ ...cred, subject: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">phoneNo</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setCred({ ...cred, phoneNo: e.target.value })
                    }
                    className="form-control"
                    placeholder="phoneNo"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">adress</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setCred({ ...cred, adress: e.target.value })
                    }
                    className="form-control"
                    placeholder="adress"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    onChange={(e) =>
                      setCred({ ...cred, email: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    onChange={(e) =>
                      setCred({ ...cred, password: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">language</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="language"
                    onChange={(e) =>
                      setCred({ ...cred, language: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    onChange={(e) =>
                      setCred({ ...cred, Country: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="state"
                  />
                </div>
              </div>

              <div className="button input-box">
                <input
                  type="submit"
                  defaultValue="Sumbit"
                  style={{backgroundColor:"#6C63FF",borderRadius:"10px",border:"none",marginLeft:"200px",margin:"10px"}}

                  
                  onClick={handleSignUp}
                  href="/login"
                />
              </div>
              <a className="d-block text-center mt-2 small" href="/login">
                Have an account? Log In
              </a>
              <hr className="my-4" />
              <div className="d-grid mb-2"></div>
              <div></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>payment</span>
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">First_name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First_name"
                />
              </div>{" "}
              <br />
              <div className="col-md-12">
                <label className="labels">Last_name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last_name"
                />

                <p>
                  hello. you will pay{" "}
                  <a
                    href="https://www.leetchi.com/c/learn?utm_source=copylink&utm_medium=social_sharing"
                    title="payment!"
                  >
                    learn
                  </a>{" "}
                  ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpInstractor;
