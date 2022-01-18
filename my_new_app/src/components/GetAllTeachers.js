import React, { useEffect, useState } from "react";
import { FormControl, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getAllInstarctor } from "../Redux/Actions/UserActions";


const GetAllTeachers = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    dispatch(getAllInstarctor());
  }, [dispatch]);
  const { loading, user } = useSelector((state) => state.getAllInstractor);
  return (
    <div>
      {loading && "loading"}
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link eventKey="link-1"> </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <FormControl
            type="search"
            placeholder="Find Language"
            aria-label="Search"
            style={{borderRadius:"25px",marginTop:"10px"}}
            onChange={(e) => handleSearch(e)}

          />
        </Nav.Item>
      </Nav>
      <div className="gg">
        {user &&
          user.getInstractor.filter((el) => el.language.toLowerCase().includes(search.toLowerCase()))
            .map((el) => (
                <div>
                  <LinkContainer to={`/profile/${el._id}`} >
                  <Nav.Link>
                    <div className="profile-card-2">
                    
                      <div className="profile-name"> {el.firstName}</div>
                      <div className="profile-username">{el.language}</div>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        className="img img-responsive"
                      />

                    </div>
                    </Nav.Link>
                    </LinkContainer>
                  </div>
            ))}
      </div>
    </div>
  );
};

export default GetAllTeachers;
