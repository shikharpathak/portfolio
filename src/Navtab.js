import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./Navtab.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navtab() {
  return (
    <div>
      <Navbar
        className="custom-nav"
        variant="dark"
      >
        <LinkContainer to="/">
          <Navbar.Brand>Portfolio</Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    </div>
  );
}

export default Navtab;
