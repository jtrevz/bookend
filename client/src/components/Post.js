import React from "react";
import Card from "react-bootstrap/Card";
import UserImg from "./img/UserImg";
import "./styles/UserCard.css";

function Post() {
  return (
    <div>
      <Card className="userCard">
        
        <UserImg />
      </Card>
    </div>
  );
}

export default Post;
