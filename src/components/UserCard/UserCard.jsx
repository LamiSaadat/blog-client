import React from "react";
import PropTypes from "prop-types";
import FollowButton from "../FollowButton/FollowButton";

function UserCard({ userInfo }) {
  return (
    <div className="card text-center userCard">
      <div className="card-body userCard__info">
        <h5 className="card-title">{userInfo?.firstName}</h5>
        <div className="userCard__details">
          <p className="card-text">Followers {userInfo?.followedBy?.length}</p>
          <p className="card-text">Following {userInfo?.following?.length}</p>
          <p className="card-text">Posts {userInfo?.posts?.length}</p>
        </div>
        {/* do not show if user profile is same as logged in user */}
        <FollowButton />
      </div>
    </div>
  );
}

UserCard.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default UserCard;
