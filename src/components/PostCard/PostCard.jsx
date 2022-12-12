import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function PostCard({ postsArr }) {
  console.log(postsArr);
  const posts = postsArr.map((post) => (
    <div key={post?.id} className="col">
      <div className="card shadow-sm">
        <h2 style={{ padding: "1rem" }}>{post?.title}</h2>
        <div className="card-body">
          <p className="card-text">{post?.content?.slice(0, 20)}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <NavLink to={`/blogPost/${post?.id}`}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View Post
                </button>
              </NavLink>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
      style={{ marginTop: "1rem" }}
    >
      {posts}
    </div>
  );
}

PostCard.propTypes = {
  postsArr: PropTypes.array.isRequired,
};

export default PostCard;
