import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../features/user/userSlice";
import UserCard from "../UserCard/UserCard";
import PostCard from "../PostCard/PostCard";

function Protected() {
  const { userInfo, accesstoken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accesstoken) {
      dispatch(getUserProfile());
    }
  }, [accesstoken, dispatch]);

  return (
    <div>
      <div>{userInfo.email}</div>
      <UserCard />
      <PostCard />
    </div>
  );
}

export default Protected;
