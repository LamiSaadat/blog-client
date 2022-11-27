import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function PostComments({ comments }) {
  const comment = comments.map((com) => (
    <Card.Body key={com?.id}>
      <Card.Text>{com?.content}</Card.Text>
    </Card.Body>
  ));
  return (
    <>
      <h3>Comments</h3>
      <Card>{comment}</Card>
    </>
  );
}

PostComments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default PostComments;
