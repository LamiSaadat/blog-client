import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { createPost } from "../../features/posts/postsSlice";

require("react-dom");
window.React2 = require("react");

console.log(window.React1 === window.React2);

function CreatePost() {
  // state to store input
  const [input, setInput] = useState({
    title: "",
    content: "",
    publish: false,
  });
  // const { loggedIn, accesstoken } = useSelector((state) => state.user);
  // console.log(loggedIn, accesstoken);
  // dispatch input
  const dispatch = useDispatch();
  // const navigate = useNavigate();

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
    console.log("clicked at 32");

    dispatch(createPost(input))
      .unwrap()
      .then(() => console.log("done"))
      .catch((err) => console.log(err));

    console.log("clicked at 44");
  };
  // drafts handler
  return (
    <form onSubmit={handleSubmit}>
      <h3>Title</h3>
      <input type="textarea" name="title" onChange={handleChange} />
      <h3>Content</h3>
      <input type="textarea" name="content" onChange={handleChange} />
      <div>
        {/* change on state */}
        <button type="submit">Post</button>
        <input
          type="checkbox"
          label="Publish"
          name="publish"
          checked={input.publish}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default CreatePost;
