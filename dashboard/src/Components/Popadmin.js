import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./Desktop.module.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Example = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const handleSubmit = () => {
  //     if (email && password) {
  //         const formData = new FormData();
  //         formData.append('username', username);
  //         formData.append('password', password);
  //         axios.post(config.api.url + '/auth/register', formData)
  //             .then(res => {
  //                 console.log(res)
  //             })
  //             .catch(err => {
  //                 console.log(err)
  //             })
  //     }
  // }
  const handleSubmit = async () => {
    await axios
      .post("http://127.0.0.1:8000/login", {
        email: email,
      })
      .then((response) => {
        if (response.data.role === "admin") navigate("/dashboard_admin");
        else {
          alert("Wrong Credentials");
        }
      })
      .catch((err) => {
        console.log("Abhiram");
        console.log(err);
      });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Admin Board
      </Button> */}
      <Button className={styles.signInButton} variant="primary" onClick={handleShow}>Sign In</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Example;
