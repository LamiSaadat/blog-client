import React from "react";
import PropTypes from "prop-types";

function PostComments({ comments }) {
  const comment = comments.map((com) => (
    <div key={com?.id}>
      <p>{com?.content}</p>
    </div>
  ));
  return (
    <>
      <h3>Comments</h3>
      <div>{comment}</div>
    </>
  );
}

PostComments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default PostComments;
