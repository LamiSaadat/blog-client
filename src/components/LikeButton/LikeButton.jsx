import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { likePost } from "../../features/posts/postsSlice";

function LikeButton({ post }) {
  const [clicked, setClicked] = useState(false);
  const postId = Number(post.id);
  const [data, setData] = useState({ userId: "", postId: "", like: clicked });
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleLike = () => {
    setClicked(!clicked);
    setData({
      userId: userInfo.id,
      postId,
      like: !clicked,
    });
  };

  console.log(data);
  console.log(clicked);

  useEffect(() => {
    if (clicked) {
      dispatch(likePost(data)).catch((err) => {
        console.log(err);
      });
    }

    // else if clicked is false
    // dispatch to dislike endpoint
  }, [dispatch]);

  // check if the post has a like from the logged in user
  // if yes, set clicked to true, hence returning filled heart

  const liker = post.likes.find((like) => like.userId === userInfo.id);
  console.log(liker);
  console.log(liker.userId);

  useEffect(() => {
    if (liker.userId === userInfo.id) {
      setClicked(true);
    }
  }, [liker]);

  return (
    <button
      type="button"
      style={{ border: "none", background: "none" }}
      onClick={toggleLike}
    >
      {clicked ? <BsHeartFill /> : <BsHeart />}
    </button>
  );
}

LikeButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default LikeButton;
