import React, {useState } from "react";
import {Button, Modal, Form} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../Redux/Actions/StudentAction";

const UpdateMyInfoStudent = ({id}) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const [cred, setCred] = useState()
    const handleshow = () => setShow(!show);

    const handleText =()=>{
        dispatch(updateStudent(id,cred))
        console.log("id",cred)
    }
    return (
        <>
           <Button style={{backgroundColor:"#fc5356",borderRadius:"25px",border:"none"}} onClick={handleshow}>
                update my info
            </Button>

            <Modal show={show} onHide={handleshow}>
                <Modal.Header closeButton>
                    <Modal.Title>update my info</Modal.Title>
                </Modal.Header>
                <Form style={{display:"flex", width:"70%", margin:"150px auto"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Edit adress..."  onChange={(e) => setCred({...cred, adress:e.target.value}) } />
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
    )
}

export default UpdateMyInfoStudent
