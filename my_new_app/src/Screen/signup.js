import { signUp } from "../Redux/Actions/UserActions";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Alert, Button } from "react-bootstrap";

function Signup() {
  const [cred, setCred] = useState({});
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const handleSignUp = () => {
    dispatch(signUp(cred));
  };
  const { loading, message } = useSelector((state) => state.signup);
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
      <div className="container">
        <div className="row py-5 mt-4 align-items-center">
          {/* For Demo Purpose */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
              alt=""
              className="img-fluid mb-3 d-none d-md-block"
            />
            <div className="create-an-Account">Create an Account</div>
          </div>

          {/* Registeration Form */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <form action="#">
              <div className="row">
                {/* First Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) =>
                      setCred({ ...cred, firstName: e.target.value })
                    }
                  />
                </div>

                {/* Last Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) =>
                      setCred({ ...cred, lastName: e.target.value })
                    }
                  />
                </div>

                {/* age */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="Age"
                    type="text"
                    name="Age"
                    placeholder="Age"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) => setCred({ ...cred, age: e.target.value })}
                  />
                </div>

                {/* gender */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="gender"
                    type="text"
                    name="gender"
                    placeholder="gender"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) =>
                      setCred({ ...cred, gender: e.target.value })
                    }
                  />
                </div>

                {/* Adress */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="adress"
                    type="text"
                    name="Adress"
                    placeholder="Adress"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) =>
                      setCred({ ...cred, adress: e.target.value })
                    }
                  />
                </div>

                {/* Email Address */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted" />
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) =>
                      setCred({ ...cred, email: e.target.value })
                    }
                  />
                </div>

                {/* Phone Number */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted" />
                    </span>
                  </div>
                  <select
                    id="countryCode"
                    name="countryCode"
                    style={{ maxWidth: "80px" }}
                    className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted"
                    onChange={(e) =>
                      setCred({ ...cred, phoneNo: e.target.value })
                    }
                  >
                    <option value>+216</option>
                    <option value>+967</option>
                    <option value>+20</option>
                    <option value>+973</option>
                  </select>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control bg-white border-md border-left-0 pl-3"
                    onChange={(e) =>
                      setCred({ ...cred, phoneNo: e.target.value })
                    }
                  />
                </div>
                {/* Password */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) =>
                      setCred({ ...cred, password: e.target.value })
                    }
                  />
                </div>

                {/* Password Confirmation */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="passwordConfirmation"
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) =>
                      setCred({ ...cred, confirmPassword: e.target.value })
                    }
                  />
                </div>

                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <a href="#" 
                  >
                    <span >
                      <button
                                        style={{backgroundColor:"#6C63FF",borderRadius:"10px",border:"none",marginLeft:"250px"}}

                        onClick={(e) => {
                          e.preventDefault();
                          handleSignUp();
                        }}
                      >
                        Create your account
                      </button>
                    </span>
                  </a>
                </div>

                {/* Divider Text */}
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5" />
                  <span className="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div className="border-bottom w-100 mr-5" />
                </div>
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Already Registered?{" "}
                    <a href="/login"
                     style={{color:"#6C63FF"}} >
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
{
}
