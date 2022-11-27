import React from "react";
import PropTypes from "prop-types";
import "./AuthorCard.scss";
import Card from "react-bootstrap/Card";
import FollowButton from "../FollowButton/FollowButton";

function AuthorCard({ author }) {
  return (
    <Card className="author-card">
      <Card.Body className="author-card__body">
        <Card.Title className="author-card__username">
          {author.firstName} {author.lastName}
        </Card.Title>
        <Card.Text className="author-card__followers">followers</Card.Text>
        <FollowButton />
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  author: PropTypes.object.isRequired,
};

export default AuthorCard;
