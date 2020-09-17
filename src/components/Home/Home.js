import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Destination from "../Destination/Destination";
import { Col, Container, Row } from "react-bootstrap";
import DestinationShortDetails from "../DestinationShortDetails/DestinationShortDetails";

const Home = () => {
  return (
    <div>
      <Container style={{ marginTop: "80px" }}>
        <Row>
          <Col sm={4}>
            <DestinationShortDetails></DestinationShortDetails>
          </Col>
          <Col sm={8} style={{ display: "flex" }}>
            <Destination></Destination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
