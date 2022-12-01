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
    <div className="card text-center userCard">
      <div className="card-body userCard__info">
        <h5 className="card-title">{userInfo?.firstName}</h5>
        <div className="userCard__details">
          <p className="card-text">Followers {userInfo?.followedBy?.length}</p>
          <p className="card-text">Following {userInfo?.following?.length}</p>
          <p className="card-text">Posts {userInfo?.posts?.length}</p>
        </div>
        <FollowButton />
      </div>
    </div>
  );
}

export default UserCard;
