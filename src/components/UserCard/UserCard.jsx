import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../features/user/userSlice";
import FollowButton from "../FollowButton/FollowButton";

function UserCard() {
  const { userInfo, accesstoken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accesstoken) {
      dispatch(getUserProfile());
    }
  }, [accesstoken, dispatch]);

  console.log(userInfo);

  return (
    <div>
      <div>
        <p>{userInfo?.firstName}</p>
        <p>Followers {userInfo?.followedBy?.length}</p>
        <p>Following {userInfo?.following?.length}</p>
        <p>Posts {userInfo?.posts?.length}</p>
        <FollowButton />
      </div>
    </div>
  );
}

export default UserCard;
