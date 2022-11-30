import React from "react";
import PropTypes from "prop-types";
import "./AuthorCard.scss";

import FollowButton from "../FollowButton/FollowButton";

function AuthorCard({ author }) {
  return (
    <div className="author-card">
      <div className="author-card__body">
        <p className="author-card__username">
          {author.firstName} {author.lastName}
        </p>
        <p className="author-card__followers">followers</p>
        <FollowButton />
      </div>
    </div>
  );
}

AuthorCard.propTypes = {
  author: PropTypes.object.isRequired,
};

export default AuthorCard;
