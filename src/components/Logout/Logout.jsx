import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../features/user/userSlice";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };
  return (
    <button
      type="submit"
      onClick={logoutHandler}
      className="btn btn-outline-light me-2"
    >
      Logout
    </button>
  );
}

export default Logout;
