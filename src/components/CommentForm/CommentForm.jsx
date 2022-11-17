import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CommentForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button>Comment</Button>
    </Form>
  );
}

export default CommentForm;
