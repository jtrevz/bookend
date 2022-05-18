import React from "react";
import "./styles/Comment.css";
function Comment() {
  return (
    <div className="postBack comment">
      <div className="authorTimeBox">
        <h5 className="commentAuthor">jennytrevizo</h5>
        <h5 className="commentTime"> @ 1:27</h5>
      </div>
      <p className="commentText">Good observation!</p>
      {/* make comment text to be same font as post text 
      add numbers to like sand comments */}
    </div>
  );
}

export default Comment;
