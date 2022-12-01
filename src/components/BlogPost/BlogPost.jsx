import React from "react";
import { useLocation } from "react-router-dom";
import AuthorCard from "../AuthorCard/AuthorCard";
import CommentForm from "../CommentForm/CommentForm";
import LikeButton from "../LikeButton/LikeButton";
import PostComments from "../PostComments/PostComments";

function BlogPost() {
  const location = useLocation();

  const { item } = location.state;
  console.log(item);

  return (
    <>
      <article className="blog-post" style={{ marginTop: "3rem" }}>
        <h2 className="blog-post-title mb-1">{item.title}</h2>
        <p className="blog-post-meta">
          January 1, 2021 by <a href="/">{item.author.firstName}</a>
        </p>
        <LikeButton />
        <hr />
        <p>{item.content}</p>
      </article>

      <AuthorCard author={item.author} />
      <PostComments comments={item.comments} />
      <CommentForm />
    </>
  );
}

export default BlogPost;
