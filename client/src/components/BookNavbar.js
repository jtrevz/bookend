import React from 'react';
import {Navbar, Nav, InputGroup, SplitButton, Dropdown, FormControl} from 'react-bootstrap'
import './styles/BookNavbar.css'

function BookNavbar () {
    return (
        <div expand='lg'>
            <Navbar expand='lg inline navBar'>
            <div className='nav-container'>
                <Navbar.Brand>Bookend</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Favorites</Nav.Link>
                        <Nav.Link >Genres</Nav.Link>
                        <InputGroup className='searchbar mb-3'>
                             <FormControl aria-label='some text'/>
                             <SplitButton
                             variant='outline-secondary'
                             title='Search'
                             id='segmented-button-dropdown-1'
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
    )
}

export default BookNavbar;