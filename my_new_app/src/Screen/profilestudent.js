import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import Header from "../components/Header";
import UpdateMyInfoStudent from "../components/UpdateMyInfoStudent";
import {
  deleteStudent,
  getStudent,
  updateStudent,
} from "../Redux/Actions/StudentAction";

const Profilestudent = () => {
  const dispatch = useDispatch();
  const [cred, setCred] = useState();
  const { id } = useParams();
  const handleText = () => {
    dispatch(updateStudent(id, cred));
  };
  const { loading, user } = useSelector((state) => state.getStudent);
  const [show, setShow] = useState(true);

  useEffect(() => {
    dispatch(getStudent(id));
  }, [dispatch]);
  return (
    <div>
      <Header />
      {loading && "loading"}
      <section className="section about-section white-bg " id="about">
        <div className="container">
          <div className="cardprofile">
            <div className="col-sm-3 ">
              <div className="about-avatar">
                <img
                  src="https://i.pinimg.com/564x/d7/8e/f6/d78ef69e3c0a21be5551612242e3bd9b.jpg"
                  title
                  alt
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">About Me</h3>
                <h6 className="theme-color lead">Student</h6>
                {<p> {user && user.getoneofthem.subject} </p>}
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>FirstName</label>
                      {<p> {user && user.getoneofthem.firstName} </p>}
                    </div>
                    <div className="media">
                      <label>Age</label>
                      {<p> {user && user.getoneofthem.age} </p>}
                    </div>
                    <div className="media">
                      <label>Address</label>
                      {<p> {user && user.getoneofthem.adress} </p>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      {<p> {user && user.getoneofthem.email} </p>}
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      {<p> {user && user.getoneofthem.phoneNo} </p>}
                    </div>
                    <div className="media">
                      <label>Gender</label>
                      {<p> {user && user.getoneofthem.gender} </p>}
                    </div>
                    <UpdateMyInfoStudent id={id} />
                    <Button
                      style={{
                        backgroundColor: "#fc5356",
                        borderRadius: "25px",
                        border: "none",
                        float: "right",
                        top: "390px",
                        left: "680px",
                      }}
                      onClick={() => setShow(false)}
                    >
                      Delete Account
                    </Button>

                    <Alert show={!show} variant="success">
                      <Alert.Heading>Are you sure?!</Alert.Heading>
                      <p>we are sad because you left we</p>
                      <hr />
                      <div className="d-flex justify-content-end">
                        {!show && (
                          <Button
                            onClick={() => setShow(true)}
                            variant="outline-success"
                          >
                            No i'm not leaving you!
                          </Button>
                        )}
                        <LinkContainer to={"/signup"}>
                          <Nav.Link
                            onClick={() =>
                              dispatch(deleteStudent(user.student._id))
                            }
                          >
                            Delete Acount
                          </Nav.Link>
                        </LinkContainer>
                      </div>
                    </Alert>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profilestudent;
