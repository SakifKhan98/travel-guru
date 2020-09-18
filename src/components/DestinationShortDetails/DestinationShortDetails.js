import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import "./DestinationShortDetails.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DestinationShortDetails = () => {
  return (
    <div>
      <h1>COX'S BAZAR</h1>
      <p>
        <small>
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </small>
      </p>
      <button className="bookingButton">
        <Nav.Link to="/destination/1" className="bookingButtonText">
          Booking{" "}
          <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} />
        </Nav.Link>
      </button>
    </div>
  );
};

export default DestinationShortDetails;
