import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { accesstoken } = useSelector((state) => state.user);

  if (!accesstoken) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to gain access
        </span>
      </div>
    );
  }
  return <Outlet />;
}

export default ProtectedRoute;
