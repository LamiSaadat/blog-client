import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard/PostCard";
import { getFeedPosts } from "../features/posts/postsSlice";

function HomePage() {
  const { allPosts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <PostCard allPosts={allPosts} />;
}

export default HomePage;
