import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://mytinerary-backend-5vu5.onrender.com/user/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  React.useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <div className="userForm">
      <h3>Log in</h3>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail" className="formLabel">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="formLabel">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
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
