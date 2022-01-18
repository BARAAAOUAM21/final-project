import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getInstarctor } from "../Redux/Actions/UserActions";
import UpdateMyinfo from "../components/UpdateMyInfo";
import { Alert, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { deleteInstarctor } from "../Redux/Actions/UserActions";

const InstractorProfile = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.getInstractor);
  const [show, setShow] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getInstarctor(id));
  }, [dispatch]);
  return (
    <div>
      {loading && "loading"}
      <Header />
      <section className="section about-section white-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">About Me</h3>
                <button
                  type="button"
                  className="btn btn-default btn-sm btn-block"
                ></button>
                <h6 className="theme-color lead">Instractor</h6>
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
                      <label>Language</label>
                      {<p> {user && user.getoneofthem.language} </p>}
                    </div>
                    <div className="media">
                      <label>Gender</label>
                      {<p> {user && user.getoneofthem.gender} </p>}
                      <UpdateMyinfo id={id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="about-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  title
                  alt
                />
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="row">
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to={500} data-speed={500}>
                    500
                  </h6>
                  <p className="m-0px font-w-600">Positive Feedback</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to={150} data-speed={150}>
                    150
                  </h6>
                  <p className="m-0px font-w-600">classes Completed</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to={850} data-speed={850}>
                    850
                  </h6>
                  <p className="m-0px font-w-600">Student</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to={190} data-speed={190}>
                    190
                  </h6>
                  <p className="m-0px font-w-600">Free Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>     
    </div>
  );
};

export default InstractorProfile;
