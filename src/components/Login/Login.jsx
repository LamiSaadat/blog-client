import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(input))
      .unwrap()
      .then(() => {
        navigate("/account");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="formContainer__form">
        <h1 className="h3 mb-3 fw-normal formContainer__title">
          Please log in
        </h1>

        <div className="form-floating">
          <h3 className="h3 mb-3 fw-normal">Email</h3>
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
          <h3 className="h3 mb-3 fw-normal">Password</h3>
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button
          className="w-100 btn btn-lg btn-primary formContainer__button"
          type="submit"
        >
          Log in
        </button>
        <p className="mt-5 mb-3 text-muted">
          Don&apos;t have an account? Register{" "}
          <NavLink to="/register">here</NavLink>!
        </p>
      </form>
    </div>
  );
}

export default Login;
