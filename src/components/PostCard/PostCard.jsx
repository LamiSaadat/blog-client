import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";

function PostCard({ allPosts }) {
  const posts = allPosts.map((post) => (
    <Card.Body key={post?.id}>
      <Card.Title>{post?.title}</Card.Title>
      <Card.Text>{post?.content.slice(0, 20)}</Card.Text>
      <NavLink to="/blogPost">
        <Button variant="primary">View Post</Button>
      </NavLink>
      <LikeButton />
    </Card.Body>
  ));

  return (
    <Card style={{ width: "18rem" }} key={posts?.id}>
      {posts}
    </Card>
  );
}

PostCard.propTypes = {
  allPosts: PropTypes.array.isRequired,
};

export default PostCard;
