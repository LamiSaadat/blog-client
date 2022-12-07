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
  const { accesstoken } = useSelector((state) => state.user);

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
          navigate("/account");
          window.location.reload(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
        <h3 className="h3 mb-3 fw-normal">Title</h3>
        <input
          type="textarea"
          className="form-control"
          name="title"
          onChange={handleChange}
          style={{ height: "4rem" }}
        />
        <h3 className="h3 mb-3 fw-normal" style={{ marginTop: "1rem" }}>
          Content
        </h3>
        <input
          type="textarea"
          className="form-control"
          name="content"
          onChange={handleChange}
          style={{ height: "18.75rem" }}
        />
        <div className="formContainer__create-post-controls">
          <button
            type="submit"
            className="w-100 btn btn-lg btn-primary formContainer__button"
          >
            {input.published ? "Post" : "Save as Draft"}
          </button>
          <div className="formContainer__publish">
            <label htmlFor="published" className="formContainer__publish">
              Publish
              <input
                type="checkbox"
                label="published"
                id="published"
                name="published"
                checked={input.published}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
