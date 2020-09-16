import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Booking from "../../Booking/Booking";

const Sundarbans = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Sundarbans</h1>
            <p>
              <small>
                The Sundarbans is a mangrove area in the delta formed by the
                confluence of the Ganges, Brahmaputra and Meghna Rivers in the
                Bay of Bengal. It spans from the Hooghly River in India's state
                of West Bengal to the Baleswar River in Bangladesh. It comprises
                closed and open mangrove forests, agriculturally used land,
                mudflats and barren land, and is intersected by multiple tidal
                streams and channels. Four protected areas in the Sundarbans are
                enlisted as UNESCO World Heritage Sites, viz. Sundarbans
                National Park, Sundarbans West, Sundarbans South and Sundarbans
                East Wildlife Sanctuaries. Despite these protections, the Indian
                Sundarbans were considered endangered in a 2020 assessment under
                the IUCN Red List of Ecosystems framework.
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

export default Sundarbans;
