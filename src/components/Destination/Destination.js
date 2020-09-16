import React from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import imgSreemongol from "../../resources/image/sreemongol.png";
import imgSundarbans from "../../resources/image/sundorbon.png";
import imgCoxsBazar from "../../resources/image/sajek.png";
import "./Destination.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Destination = () => {
  return (
    <>
      <div>
        <Router>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Link>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      className="cardImage"
                      src={imgCoxsBazar}
                      alt="Card image"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>COX'S BAZAR</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
              <Col xs={6} md={4}>
                <Link>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      className="cardImage"
                      src={imgSreemongol}
                      alt="Card image"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>SREEMANGAL</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
              <Col xs={6} md={4}>
                <Link>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      className="cardImage"
                      src={imgSundarbans}
                      alt="Card image"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>SUNDARBANS</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    </>
  );
};

export default Destination;
