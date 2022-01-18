import { Nav, Navbar, Container, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { lougout } from "../Redux/Actions/UserActions";

function Header() {
  const { user } = useSelector((state) => state.loginDetails);

  const dispatch = useDispatch();
  const handleLougOut = () => {
    dispatch(lougout());
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Learn.</Navbar.Brand>
          </LinkContainer>
          {user && user.instractor ? (
            <>
              <LinkContainer to={`/profile/${user.instractor._id}`}>
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
            </>
          ) : user && user.student ? (
            <>
            <LinkContainer to={`/profilestudent/${user.student._id}`}>
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`/Teachers/${user.student._id}`} >
            <Nav.Link>Teachers</Nav.Link>
          </LinkContainer>
          </>
          ) : (
            <LinkContainer to="/login"
            style={{borderRadius:"25px",border:"#6C63FF solid"}}
            >
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            
          )}
          {user ? (
            <>
              <LinkContainer to="/login">
                <Nav.Link onClick={handleLougOut}>LogOut</Nav.Link>
              </LinkContainer>
            </>
          ) : (
            <>
            
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="me-auto"></Nav>
                 <Nav>
                   <Nav.Link href="/Aid">Aid</Nav.Link>
                   <Nav.Link href="/signupinstractor">Give lessons</Nav.Link>
                   <Nav.Link eventKey={2} href="/signup">
                     SignUp
                   </Nav.Link>
                 </Nav>
               </Navbar.Collapse>
               </>
          )}

       
          
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
