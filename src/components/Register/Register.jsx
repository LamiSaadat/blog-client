import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../features/user/userSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(input))
      .unwrap()
      .then(() => {
        navigate("/login");
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <p>First Name</p>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <p>Last Name</p>
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <p>Email address</p>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
