import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hotels from "../Hotels/Hotels";

const SpotDetails = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Hotels></Hotels>
        </Col>
        <Col>
          <h1>This is Google Map</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default SpotDetails;
