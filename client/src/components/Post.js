import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserImg from "./img/UserImg";
import Star from "./img/Star";
import CommImg from "./img/CommImg";
import "./styles/Post.css";

function Post() {
  return (
    <div>
      <Card md={2} className="userCard">
        <div className="postBack">
          <Row>
            <Col className="imgCont">
              <UserImg />
            </Col>
            <Col md={10} className="postCont">
              <Card className="postCard">
                <Row>
                  <Col className="postHeading">
                    <Card.Title className="postAuthor">
                      jenny trevizo
                    </Card.Title>
                    <Card.Text className="postTimeStamp">@ 12:32</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Card.Title className="postText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Card.Title>
                </Row>
                <Row>
                  <div className="inter">
                    <CommImg />
                    <Star />
                  </div>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default Post;
