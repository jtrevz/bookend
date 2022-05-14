import React from "react";
import "./styles/Comment.css";
function Comment() {
  return (
    <div className="postBack comment">
      <h5 className="commentAuthor">user123</h5>
      <p className="commentText">Good observation!</p>
      {/* mae somment text */}
    </div>
  );
}

export default Comment;
