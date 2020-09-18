import React, { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../resources/logo-white.svg";

import "./Header.css";
import { UserContext } from "../../App";

const Header = () => {
  return (
    <div className="container">
      <Navbar className="mt-3" bg="transparent" variant="dark">
        <Navbar.Brand href="/home">
          <img id="logo" src={logo} alt="Travel Guru" srcSet="" />
        </Navbar.Brand>
        <Form inline>
          <FormControl
            id="searchBar"
            type="text"
            placeholder="Search Your Destination..."
            className="mr-sm-2"
          ></FormControl>
        </Form>
        <Nav>
          <Nav.Link className="ml-5 " href="/news">
            News
          </Nav.Link>
          <Nav.Link className="ml-3" href="/destination">
            Destination
          </Nav.Link>
          <Nav.Link className="ml-3" href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link className="ml-3" href="/contact">
            Contact
          </Nav.Link>
          <button className="ml-3  loginButton">
            <Nav.Link href="/login" className="loginButtonText">
              Login
            </Nav.Link>
          </button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
