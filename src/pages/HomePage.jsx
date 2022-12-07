import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PostCard from "../components/PostCard/PostCard";
import { getFeedPosts } from "../features/posts/postsSlice";

function HomePage() {
  const { allPosts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    dispatch(getFeedPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <PostCard postsArr={allPosts} />;
}

export default HomePage;
