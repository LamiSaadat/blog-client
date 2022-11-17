import React from "react";
import AuthorCard from "../AuthorCard/AuthorCard";
import CommentForm from "../CommentForm/CommentForm";
import LikeButton from "../LikeButton/LikeButton";
import PostComments from "../PostComments/PostComments";

function BlogPost() {
  return (
    <>
      <div>
        <h1>Title</h1>
        <LikeButton />
        <p>Content</p>
      </div>
      <AuthorCard />
      <PostComments />
      <CommentForm />
    </>
  );
}

export default BlogPost;
