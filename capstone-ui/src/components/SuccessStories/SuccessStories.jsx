import React from "react";
import "./SuccessStories.css";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function SuccesStories() {
  return (
    <div className="successStories">
      <Container>
        <h1>Success Stories</h1>
        <p>PLACE ALL SUCCESS STORIES HERE</p>
        <Row>
          <Col>First column</Col>
          <Col>Second column</Col>
        </Row>
      </Container>
    </div>
  );
}
