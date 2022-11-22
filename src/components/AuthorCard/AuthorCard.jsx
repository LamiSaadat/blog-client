import React from "react";
import "./AuthorCard.scss";
import Card from "react-bootstrap/Card";
import FollowButton from "../FollowButton/FollowButton";

function AuthorCard() {
  return (
    <Card className="author-card">
      <Card.Body className="author-card__body">
        <Card.Title className="author-card__username">User Name</Card.Title>
        <Card.Text className="author-card__followers">followers</Card.Text>
        <FollowButton />
      </Card.Body>
    </Card>
  );
}

export default AuthorCard;
