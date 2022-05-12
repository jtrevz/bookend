import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import UserCard from "../../components/UserCard";
import Post from "../../components/Post";
import "./style.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Container className="content">
        <Row>
          <Col md={3}>
            <UserCard />
          </Col>
          <Col md={9}>
            <Post />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
