import React from "react";
import { useSelector } from "react-redux";

function Protected() {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <div>{loggedIn ? <div>Protected data</div> : <div>Please log in</div>}</div>
  );
}

export default Protected;
