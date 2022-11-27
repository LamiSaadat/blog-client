import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../features/posts/postsSlice";

function CreatePost() {
  const { loggedIn, accesstoken } = useSelector((state) => state.user);
  console.log(loggedIn);
  // state to store input
  const [input, setInput] = useState({
    title: "",
    content: "",
    publish: false,
  });
  // dispatch input
  const dispatch = useDispatch();
  const navigate = useNavigate;

  // change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (loggedIn && accesstoken) {
      dispatch(createPost(input))
        .unwrap()
        .then(() => {
          navigate("/");
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // drafts handler
  return (
    <Form onSubmit={handleSubmit}>
      <h3>Title</h3>
      <Form.Control as="textarea" name="title" onChange={handleChange} />
      <h3>Content</h3>
      <Form.Control as="textarea" name="content" onChange={handleChange} />
      <div>
        {/* change on state */}
        <Button type="submit">Post</Button>
        <Form.Check
          type="checkbox"
          label="Publish"
          name="publish"
          checked={input.publish}
          onChange={handleChange}
        />
      </div>
    </Form>
  );
}

export default CreatePost;
