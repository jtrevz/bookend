import React from "react";
import "./styles/Comment.css";
function Comment() {
  return (
    <div className="postBack comment">
      <h5 className="commentAuthor">user123</h5>
      <p className="commentText">Good observation!</p>
      {/* make comment text to be same font as post text 
      add numbers to like sand comments */}
    </div>
  );
}

export default Comment;
