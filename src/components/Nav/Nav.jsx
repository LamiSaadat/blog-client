import React from "react";
import { useSelector } from "react-redux";
import Logout from "../Logout/Logout";

function NavBar() {
  const { loggedIn, accesstoken } = useSelector((state) => state.user);

  return (
    <nav>
      <div>
        <a href="/">Blog</a>
        <nav className="me-auto">
          <a href="/">Feed</a>
          <a href="/create">Create</a>
          <a href="/account">My Profile</a>
          {loggedIn && accesstoken ? <Logout /> : <a href="/login">Login</a>}
        </nav>
      </div>
    </nav>
  );
}

export default NavBar;
