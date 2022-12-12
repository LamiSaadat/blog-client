import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { likePost } from "../../features/posts/postsSlice";

function LikeButton({ postId }) {
  const [clicked, setClicked] = useState(false);
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
  }, [dispatch]);

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
  postId: PropTypes.number.isRequired,
};

export default LikeButton;
