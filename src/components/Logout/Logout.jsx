import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { logout } from "../../features/user/userSlice";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { loggedIn } = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("accesstoken");
    navigate("/login");
  };
  return (
    <Button variant="primary" type="submit" onClick={logoutHandler}>
      Logout
    </Button>
  );
}

export default Logout;
