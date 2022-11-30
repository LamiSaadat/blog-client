import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";

function PostCard({ allPosts }) {
  const posts = allPosts.map((post) => (
    <div key={post?.id}>
      <p>{post?.title}</p>
      <p>{post?.content.slice(0, 20)}</p>
      <NavLink
        to={`/blogPost/${post?.id}`}
        state={{ from: "all posts", item: post }}
      >
        <button type="submit">View Post</button>
      </NavLink>
      <LikeButton />
    </div>
  ));

  return (
    <div style={{ width: "18rem" }} key={posts?.id}>
      {posts}
    </div>
  );
}

PostCard.propTypes = {
  allPosts: PropTypes.array.isRequired,
};

export default PostCard;
