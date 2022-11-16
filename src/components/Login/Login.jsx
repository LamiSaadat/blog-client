import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogin(input))
      .unwrap()
      .then(() => {
        if (userInfo) {
          navigate("/protected");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="login-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
