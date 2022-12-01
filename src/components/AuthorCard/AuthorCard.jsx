import React from "react";
import PropTypes from "prop-types";
import "./AuthorCard.scss";

import FollowButton from "../FollowButton/FollowButton";

function AuthorCard({ author }) {
  return (
    <div className="author-card card text-center">
      <div className="author-card__body card-body">
        <h4 className="author-card__username card-title">
          {author.firstName} {author.lastName}
        </h4>
        <p className="author-card__followers card-text">followers</p>
        <FollowButton />
      </div>
    </div>
  );
}

AuthorCard.propTypes = {
  author: PropTypes.object.isRequired,
};

export default AuthorCard;
