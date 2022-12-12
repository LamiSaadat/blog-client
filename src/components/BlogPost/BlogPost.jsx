import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getSinglePost } from "../../features/posts/postsSlice";
import CommentForm from "../CommentForm/CommentForm";
import LikeButton from "../LikeButton/LikeButton";
import AuthorCard from "../AuthorCard/AuthorCard";
import PostComments from "../PostComments/PostComments";

function BlogPost() {
  const { singlePost } = useSelector((state) => state.posts);
  const { postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePost(Number(postId))).catch((err) => {
      console.log(err);
    });
  }, [dispatch, postId]);

  console.log(singlePost);

  return (
    <div
      className="row g-5"
      style={{ justifyContent: "space-between", marginTop: "3rem" }}
    >
      <div className="col-md-8" style={{ width: " 75%" }}>
        <div className="blog-post-container">
          <article className="blog-post">
            <h2 className="blog-post-title mb-1">{singlePost?.title}</h2>
            <p className="blog-post-meta">
              January 1, 2021 by{" "}
              <NavLink
                to={`/profile/${singlePost?.author?.id}`}
                state={{ from: "blog post", item: singlePost }}
              >
                {singlePost?.author?.firstName}
              </NavLink>
            </p>
            <LikeButton post={singlePost} />
            <hr />
            <p>{singlePost?.content}</p>
          </article>
        </div>
      </div>

      <AuthorCard author={singlePost} />
      <PostComments comments={singlePost} />
      <CommentForm />
    </div>
  );
}

export default BlogPost;
