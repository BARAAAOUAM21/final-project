import React, { useEffect, useState } from 'react'
import { Alert, Button, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { deleteInstarctor } from '../Redux/Actions/UserActions';
import InstractorProfile from './InstractorProfile'

const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.loginDetails);
    const [show, setShow] = useState(true);
  
    useEffect(() => {
      if (!user) {
        Navigate(`/login`);
      }
    }, []);
    return (
        <div>
            <InstractorProfile/>
        
 <Button  style={{backgroundColor:"#fc5356",borderRadius:"25px",border:"none",float:"right",top:"700px",position: "absolute",left:"1320px"}} onClick={() => setShow(false)}>Delete Account</Button>

<Alert show={!show} variant="success">
  <Alert.Heading>Are you sure?!</Alert.Heading>
  <p>we are sad because you left we</p>
  <hr />
  <div className="d-flex justify-content-end">
    {!show && (
      <Button onClick={() => setShow(true)} variant="outline-success">
        No i'm not leaving you!
      </Button>
    )}
    <LinkContainer to={"/signup"}>
      <Nav.Link
        onClick={() => dispatch(deleteInstarctor(user. instractor._id))}
      >
        Delete Acount
      </Nav.Link>
    </LinkContainer>
  </div>
</Alert> 
        </div>
    )
}

export default Profile
