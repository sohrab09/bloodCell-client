import React from 'react';
import logo from '../../Image/logo.png';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar className="" collapseOnSelect expand="lg">
                <Navbar.Brand to="/home"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navbar m-3 p-3">
                        <Nav.Link to="/home">HOME</Nav.Link>
                        <NavDropdown title="DONOR LIST" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#A+">A+</NavDropdown.Item>
                            <NavDropdown.Item href="#A-">A-</NavDropdown.Item>
                            <NavDropdown.Item href="#B+">B+</NavDropdown.Item>
                            <NavDropdown.Item href="#B-">B-</NavDropdown.Item>
                            <NavDropdown.Item href="#O+">O+</NavDropdown.Item>
                            <NavDropdown.Item href="#O-">O-</NavDropdown.Item>
                            <NavDropdown.Item href="#AB+">AB+</NavDropdown.Item>
                            <NavDropdown.Item href="#AB-">AB-</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <NavDropdown title="BE A DONOR" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#A+">A+</NavDropdown.Item>
                            <NavDropdown.Item href="#A-">A-</NavDropdown.Item>
                            <NavDropdown.Item href="#B+">B+</NavDropdown.Item>
                            <NavDropdown.Item href="#B-">B-</NavDropdown.Item>
                            <NavDropdown.Item href="#O+">O+</NavDropdown.Item>
                            <NavDropdown.Item href="#O-">O-</NavDropdown.Item>
                            <NavDropdown.Item href="#AB+">AB+</NavDropdown.Item>
                            <NavDropdown.Item href="#AB-">AB-</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link to="/work">WORK</Nav.Link>
                        <Nav.Link to="/rules">RULES</Nav.Link>
                        <Nav.Link to="/blog">BLOG</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;