import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Booking from "../../Booking/Booking";

const Sreemongol = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>SREEMONGOL</h1>
            <p>
              <small>
                It is said the name Sreemangal (or Srimangal) is named after Sri
                Das and Mangal Das; two brothers who settled on the banks of the
                Hail Haor. A copper plate of Raja Marundanath from the 11th
                century was found in Kalapur. During an excavation at Lamua, an
                ancient statue of Ananta Narayan was dug out. In 1454, the
                Nirmai Shiva Bari was built and still stands today. Srimangal
                thana was established in 1912. The central town later became a
                pourashava in 1935. In 1963, two peasants were killed by police
                officers which kicked off the Balishira peasant riots. During
                the Bangladesh Liberation War of 1971, the Pakistani army
                reached Srimangal on 30 April setting houses on fire and
                committing atrocities against women. The East Pakistan Rifles
                camp and Wapda office premises were among the two mass killing
                sites. Two mass graves remain in Bharaura with a memorial in
                North Bharaura.
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

export default Sreemongol;
