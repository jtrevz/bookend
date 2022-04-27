import React from 'react';
import {Navbar, Nav, InputGroup, SplitButton, Dropdown, FormControl} from 'react-bootstrap'
import './styles/BookNavbar.css'
import logo from './img/logo.png'

function BookNavbar () {
    return (
        <div expand='lg'>
            <Navbar expand='lg inline navBar'>
            <div className='nav-container'>
                <Navbar.Brand className='brand'>
                    <img src={logo} height='55' width='55' />
                    Bookend</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse className='navOptions'>
                    <Nav className='justify-content-end'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link >Favorites</Nav.Link>
                        <Nav.Link >Genres</Nav.Link>
                        <Nav.Link href='/signup'>Signup</Nav.Link>
                        <Nav.Link href='/login'>Login</Nav.Link>
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