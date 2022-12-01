import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost, getFeedPosts } from "../../features/posts/postsSlice";

function CreatePost() {
  const [input, setInput] = useState({
    title: "",
    content: "",
    published: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn, accesstoken } = useSelector((state) => state.user);
  console.log("logged in:", loggedIn);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (accesstoken) {
      dispatch(createPost(input))
        .unwrap()
        .then(() => {
          dispatch(getFeedPosts());
          navigate("/");
          window.location.reload(false);
        })
        .catch((err) => console.log(err));
    }
  };
  // drafts handler
  return (
    <form onSubmit={handleSubmit}>
      <h3>Title</h3>
      <input type="textarea" name="title" onChange={handleChange} />
      <h3>Content</h3>
      <input type="textarea" name="content" onChange={handleChange} />
      <div>
        <button type="submit">
          {input.published ? "Post" : "Save as Draft"}
        </button>
        <input
          type="checkbox"
          label="published"
          id="published"
          name="published"
          checked={input.published}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default CreatePost;
