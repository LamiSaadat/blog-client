import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthorCard from "../AuthorCard/AuthorCard";
import CommentForm from "../CommentForm/CommentForm";
import LikeButton from "../LikeButton/LikeButton";
import PostComments from "../PostComments/PostComments";

function BlogPost() {
  const location = useLocation();

  const { item } = location.state;
  console.log(item);

  return (
    <div
      className="row g-5"
      style={{ justifyContent: "space-between", marginTop: "3rem" }}
    >
      <div className="col-md-8" style={{ width: " 75%" }}>
        <div className="blog-post-container">
          <article className="blog-post">
            <h2 className="blog-post-title mb-1">{item.title}</h2>
            <p className="blog-post-meta">
              January 1, 2021 by{" "}
              <NavLink
                to={`/profile/${item.author.id}`}
                state={{ from: "blog post", item }}
              >
                {item.author.firstName}
              </NavLink>
            </p>
            <LikeButton />
            <hr />
            <p>{item.content}</p>
          </article>
        </div>
      </div>

      <AuthorCard author={item.author} />
      <PostComments comments={item.comments} />
      <CommentForm />
    </div>
  );
}

export default BlogPost;
