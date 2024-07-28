import React from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css"

function Register() {
  return (
    <div className="register">
      <h3>Sign Up</h3>
      <Form>
        <Form.Group controlId="formBasicFirstName" className="formLabel">
          <Form.Label >First Name</Form.Label >
          <Form.Control type="text" placeholder="First name" />
        </Form.Group>

        <Form.Group controlId="formBasicLastName" className="formLabel">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="formLabel">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="formLabel">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="signUpButton">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Register;
