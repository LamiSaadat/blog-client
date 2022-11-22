import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
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

  return (
    <Card>
      <Card.Body>
        <Card.Title>{userInfo?.firstName}</Card.Title>
        <Card.Text>Followers {userInfo?.followedBy?.length}</Card.Text>
        <Card.Text>Following {userInfo?.following?.length}</Card.Text>
        <Card.Text>Posts {userInfo?.posts?.length}</Card.Text>
        <FollowButton />
      </Card.Body>
    </Card>
  );
}

export default UserCard;
