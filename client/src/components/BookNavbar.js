import React from "react";
import {
  Navbar,
  Nav,
  InputGroup,
  Button,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import "./styles/BookNavbar.css";
import logo from "./img/logo.png";
import fontSize from "./styles/styleVariables";

function BookNavbar() {
  return (
    <div expand="lg">
      <Navbar expand="lg inline navBar">
        <div className="nav-container">
          <Navbar.Brand className="brand" styles={fontSize}>
            <img src={logo} height="55" width="55" />
            bookend
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navOptions">
            <Nav className="justify-content-end">
              <Nav.Link href="/">home</Nav.Link>
              <Nav.Link>favorites</Nav.Link>
              <Nav.Link>genres</Nav.Link>
              <InputGroup>
                <FormControl />
                <Button variant="outline-secondary" title="search">
                  search
                </Button>
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default BookNavbar;
