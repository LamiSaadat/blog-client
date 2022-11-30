import React from "react";
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
      <div>
        <div>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <LikeButton />
          <span>{item.likes.length}</span>
        </div>
      </div>

      <AuthorCard author={item.author} />
      <PostComments comments={item.comments} />
      <CommentForm />
    </>
  );
}

export default BlogPost;
