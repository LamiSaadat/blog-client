import React from "react";
import Card from "react-bootstrap/Card";
import FollowButton from "../FollowButton/FollowButton";

function AuthorCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
        <FollowButton />
      </Card.Body>
    </Card>
  );
}

export default AuthorCard;
