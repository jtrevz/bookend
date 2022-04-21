import React from 'react';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap'
import './styles/BookNavbar.css'

function BookNavbar () {
    return (
        <div expand='lg'>
            <Navbar expand='lg inline'>
            <div className='nav-container'>
                <Navbar.Brand>Bookend</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse >
                    <Nav className='me-auto'>
                        <Nav.Link >Dashboard</Nav.Link>
                        <Nav.Link >Hello</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default BookNavbar;