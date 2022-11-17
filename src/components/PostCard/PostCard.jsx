import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";

function PostCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
        <NavLink to="/blogPost">
          <Button variant="primary">Go somewhere</Button>
        </NavLink>
        <LikeButton />
      </Card.Body>
    </Card>
  );
}

export default PostCard;
