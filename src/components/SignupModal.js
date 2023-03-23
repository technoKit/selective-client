import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useAuth from "../contexts/auth";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";

function SignupModal({ show, setShow, signUp, signupLoading, signupError }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.name, data.email, data.password);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#182e57",
            color: "white",
          }}
        >
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                {...register("name", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                {...register("email", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                {...register("password", { required: true })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {signupError && <div style={{ color: "red" }}>{signupError}</div>}
          {signupLoading ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                style={{ backgroundColor: "#182e57" }}
                variant="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignupModal;
