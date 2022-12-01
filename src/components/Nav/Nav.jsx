import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";

function NavBar() {
  const { loggedIn, accesstoken } = useSelector((state) => state.user);

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 text-white">
                Feed
              </a>
            </li>
            <li>
              <a href="/create" className="nav-link px-2 text-white">
                Create
              </a>
            </li>
            <li>
              <a href="/account" className="nav-link px-2 text-white">
                Profile
              </a>
            </li>
          </ul>

          <div className="text-end">
            {loggedIn && accesstoken ? (
              <Logout />
            ) : (
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
