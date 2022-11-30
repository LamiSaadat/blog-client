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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don&apos;t have an account? Register{" "}
        <NavLink to="/register">here</NavLink>!
      </p>
    </div>
  );
}

export default Login;
