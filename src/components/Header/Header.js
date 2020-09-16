import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="transparent" variant="dark">
        <Navbar.Brand href="#home">
          <img src="../../resources/logo.png" alt="Travel Guru" srcSet="" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
