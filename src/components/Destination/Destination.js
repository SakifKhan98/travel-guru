import React from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import "./Destination.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Destination = (props) => {
  console.log(props);
  const { image, name, description, id } = props.destination;
  return (
    <>
      <div>
        <Router>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Link to={"/" + id}>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      className="cardImage"
                      src={image}
                      alt="Card image"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{name}</Card.Title>
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
