import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Booking from "../../Booking/Booking";

const CoxsBazar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {" "}
            <h1>COXS BAZAR</h1>
            <p>
              <small>
                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
                known for its very long, sandy beachfront, stretching from Sea
                Beach in the north to Kolatoli Beach in the south. Aggameda
                Khyang monastery is home to bronze statues and centuries-old
                Buddhist manuscripts. South of town, the tropical rainforest of
                Himchari National Park has waterfalls and many birds. North, sea
                turtles breed on nearby Sonadia Island.
              </small>
            </p>
          </Col>
          <Col>
            <Booking></Booking>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoxsBazar;
