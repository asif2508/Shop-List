import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Shop List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to='/' href="#home">Shop</Nav.Link>
                        <Nav.Link as={CustomLink} to='/addshop' href="#link">Add Shop </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;