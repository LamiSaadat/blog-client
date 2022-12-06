import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import UserCard from "../components/UserCard/UserCard";
import { getUserProfile } from "../features/user/userSlice";

function ProfilePage() {
  const { userInfo, accesstoken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (accesstoken) {
      dispatch(getUserProfile());
    }
  }, [accesstoken, dispatch]);

  console.log(userInfo);

  if (location?.state?.from === "blog post") {
    return <UserCard userInfo={location.state.item.author} />;
  }

  if (location?.state?.from === "navigation") {
    return <UserCard userInfo={userInfo} />;
  }

  return <UserCard userInfo={userInfo} />;
}

export default ProfilePage;

// logged in user
// see own profile
// edit own profile
// other user's profile and follow

// notlogged in
// other user's profile but can't follow
