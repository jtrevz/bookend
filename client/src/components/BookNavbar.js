import React from "react";
import {
  Navbar,
  Nav,
  InputGroup,
  SplitButton,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import "./styles/BookNavbar.css";
import logo from "./img/logo.png";
import fontSize from "./styles/brandFont";

function BookNavbar() {
  return (
    <div expand="lg">
      <Navbar expand="lg inline navBar">
        <div className="nav-container">
          <Navbar.Brand className="brand" style={fontSize}>
            <img src={logo} height="55" width="55" />
            bookend
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navOptions">
            <Nav className="justify-content-end">
              <Nav.Link href="/">home</Nav.Link>
              <Nav.Link>favorites</Nav.Link>
              <Nav.Link>genres</Nav.Link>
              <InputGroup className="searchbar mb-3">
                <FormControl aria-label="some text" />
                <SplitButton
                  variant="outline-secondary"
                  title="Search"
                  id="segmented-button-dropdown-1"
                >
                  <Dropdown.Item>Book</Dropdown.Item>
                  <Dropdown.Item>Author</Dropdown.Item>
                  <Dropdown.Item>Genre</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>ISBN</Dropdown.Item>
                </SplitButton>
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default BookNavbar;
