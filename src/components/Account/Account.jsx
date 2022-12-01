import React from "react";
// import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";
// import PostCard from "../PostCard/PostCard";

function Account() {
  // const { loggedIn } = useSelector((state) => state.user);
  // console.log(loggedIn);
  return (
    <div>
      <UserCard />
      {/* <PostCard /> */}
    </div>
  );
}

export default Account;
