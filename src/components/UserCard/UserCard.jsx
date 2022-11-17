import React from "react";
import Card from "react-bootstrap/Card";
import FollowButton from "../FollowButton/FollowButton";

function UserCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>User name</Card.Title>
        <Card.Text>followers</Card.Text>
        <Card.Text>posts</Card.Text>
        <FollowButton />
      </Card.Body>
    </Card>
  );
}

export default UserCard;
