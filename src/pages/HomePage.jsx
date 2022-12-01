import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard/PostCard";
import { getFeedPosts } from "../features/posts/postsSlice";

function HomePage() {
  const { loggedIn } = useSelector((state) => state.user);
  const { allPosts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  console.log("logged in:", loggedIn);
  useEffect(() => {
    dispatch(getFeedPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <PostCard allPosts={allPosts} />;
}

export default HomePage;
