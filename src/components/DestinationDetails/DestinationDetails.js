import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Booking from "../Booking/Booking";

const DestinationDetails = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>
            <Booking></Booking>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DestinationDetails;
