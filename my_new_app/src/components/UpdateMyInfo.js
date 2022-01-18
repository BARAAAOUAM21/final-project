import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateInstarctor } from "../Redux/Actions/UserActions";
const UpdateMyinfo = ({ id }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [cred, setCred] = useState();
  const handleshow = () => setShow(!show);

  const handleText = () => {
    dispatch(updateInstarctor(id, cred));
    console.log("id", cred);
  };
  const { user } = useSelector((state) => state.getInstractor);

  return (
    <>
      <>
        <Button
          variant="primary"
          style={{
            backgroundColor: "#fc5356",
            borderRadius: "25px",
            border: "none",
            margin: "20px",
          }}
          onClick={handleshow}
        >
          update my info
        </Button>

        <Modal show={show} onHide={handleshow}>
          <Modal.Header closeButton>
            <Modal.Title>update my info</Modal.Title>
          </Modal.Header>
          <Form style={{ display: "flex", width: "70%", margin: "150px auto" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Edit FirstName..."
                onChange={(e) =>
                  setCred({ ...cred, firstName: e.target.value })
                }
              />
              <Form.Control
                type="text"
                placeholder="Edit LastName..."
                onChange={(e) => setCred({ ...cred, lastName: e.target.value })}
              />
              <Form.Control
                type="text"
                placeholder="Edit Age..."
                onChange={(e) => setCred({ ...cred, age: e.target.value })}
              />
              <Form.Control
                type="text"
                placeholder="Edit phoneNo..."
                onChange={(e) => setCred({ ...cred, phoneNo: e.target.value })}
              />
              {/* <Form.Control
                type="text"
                placeholder="Edit E-mail..."
                onChange={(e) => setCred({ ...cred, email: e.target.value })}
              /> */}
              <Form.Control
                type="text"
                placeholder="Edit language..."
                onChange={(e) => setCred({ ...cred, language: e.target.value })}
              />

              <Form.Control
                type="text"
                placeholder="Edit adress..."
                onChange={(e) => setCred({ ...cred, adress: e.target.value })}
              />
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleshow}>
              Close
            </Button>
            <Button variant="primary" onClick={handleText}>
              save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default UpdateMyinfo;
