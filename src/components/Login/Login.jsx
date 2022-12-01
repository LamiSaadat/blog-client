import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { userInfo } = useSelector((state) => state.user);
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
    // <div className="form-container">
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3">
    //       <p>Email address</p>
    //       <input
    //         type="email"
    //         placeholder="Enter email"
    //         name="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <p>Password</p>
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    //   <p>
    //     Don&apos;t have an account? Register{" "}
    //     <NavLink to="/register">here</NavLink>!
    //   </p>
    // </div>
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="h3 mb-3 fw-normal login__title">Please log in</h1>

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
          <h3>Password</h3>
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
          className="w-100 btn btn-lg btn-primary login__button"
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
