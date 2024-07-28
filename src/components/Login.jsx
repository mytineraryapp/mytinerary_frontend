import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css"

function Login() {
  return (
    <div className="userForm">
      <h3>Log in</h3>
      <Form>

        <Form.Group controlId="formBasicEmail" className="formLabel">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="formLabel">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="userButton">
          Log In
        </Button>
      </Form>
      <p className="alternateLink">Don't have an account?</p>
      <Link to={"/register"}>Sign up</Link>
    </div>
  );
}

export default Login;