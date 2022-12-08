import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import UserCard from "../components/UserCard/UserCard";
import PostCard from "../components/PostCard/PostCard";
import { getUserProfile } from "../features/user/userSlice";

function ProfilePage() {
  const [showPublished, setShowPublished] = useState(false);
  const [showDrafts, setShowDrafts] = useState(false);

  const { userInfo, accesstoken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (accesstoken) {
      dispatch(getUserProfile());
      setShowPublished(true);
    }
  }, [accesstoken, dispatch]);

  console.log(userInfo);

  const usersPosts = userInfo?.posts;
  const usersPublishedPosts = usersPosts.filter(
    (post) => post.published === true
  );
  const usersDrafts = usersPosts.filter((post) => post.published === false);

  if (location?.state?.from === "blog post") {
    const authorsPosts = location?.state?.item?.author?.posts;
    const publishedPosts = authorsPosts.filter(
      (post) => post.published === true
    );

    return (
      <>
        <UserCard userInfo={location?.state?.item?.author} />
        <PostCard postsArr={publishedPosts} />
      </>
    );
  }

  if (location?.state?.from === "navigation") {
    return (
      <>
        <UserCard userInfo={userInfo} />
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-evenly">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => {
                setShowPublished(true);
                setShowDrafts(false);
              }}
            >
              Published
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => {
                setShowDrafts(true);
                setShowPublished(false);
              }}
            >
              Drafts
            </button>
          </nav>
        </div>
        {showPublished && <PostCard postsArr={usersPublishedPosts} />}
        {showDrafts && <PostCard postsArr={usersDrafts} />}
      </>
    );
  }

  return (
    <>
      <UserCard userInfo={userInfo} />
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-evenly">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              setShowPublished(true);
              setShowDrafts(false);
            }}
          >
            Published
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              setShowDrafts(true);
              setShowPublished(false);
            }}
          >
            Drafts
          </button>
        </nav>
      </div>
      {showPublished && <PostCard postsArr={usersPublishedPosts} />}
      {showDrafts && <PostCard postsArr={usersDrafts} />}
    </>
  );
}

export default ProfilePage;

// logged in user
// see own profile
// edit own profile
// other user's profile and follow

// notlogged in
// other user's profile but can't follow
