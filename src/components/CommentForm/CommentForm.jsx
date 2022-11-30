import React from "react";

function CommentForm() {
  return (
    <form>
      <div className="mb-3">
        <p>Example textarea</p>
        <input type="textarea" rows={3} />
      </div>
      {/* <button>Comment</button> */}
    </form>
  );
}

export default CommentForm;
