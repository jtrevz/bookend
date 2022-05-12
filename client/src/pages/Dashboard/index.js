import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import UserCard from "../../components/UserCard";
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
            <Card>Dashboard</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
