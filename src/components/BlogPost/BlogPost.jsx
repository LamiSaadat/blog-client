import React from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AuthorCard from "../AuthorCard/AuthorCard";
import CommentForm from "../CommentForm/CommentForm";
import LikeButton from "../LikeButton/LikeButton";
import PostComments from "../PostComments/PostComments";

function BlogPost() {
  const location = useLocation();

  const { item } = location.state;

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.content}</Card.Text>
          <LikeButton />
        </Card.Body>
      </Card>

      <AuthorCard />
      <PostComments />
      <CommentForm />
    </>
  );
}

export default BlogPost;
