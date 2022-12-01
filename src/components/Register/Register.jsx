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
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="formContainer__form">
        <h1 className="h3 mb-3 fw-normal formContainer__title">Register</h1>
        <div className="form-floating">
          <h3>First Name</h3>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-floating">
          <h3>Last Name</h3>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-floating">
          <h3>Email</h3>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-floating">
          <h3>Email</h3>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-100 btn btn-lg btn-primary formContainer__button"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
