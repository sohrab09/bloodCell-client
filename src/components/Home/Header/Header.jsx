import React from "react";
import logo from "../../Image/logo.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="animate-navbar nav-theme justify-content-between"
            >
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto navbar m-3 p-3">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Be a Donor" id="basic-nav-dropdown">
                                <Nav.Link as={Link} to="/aPositive" target="_blank">A+</Nav.Link>
                                <Nav.Link as={Link} to="/aNegative" target="_blank">A-</Nav.Link>
                                <Nav.Link as={Link} to="/bPositive" target="_blank">B+</Nav.Link>
                                <Nav.Link as={Link} to="/bNegative" target="_blank">B-</Nav.Link>
                                <Nav.Link as={Link} to="/oPositive" target="_blank">O+</Nav.Link>
                                <Nav.Link as={Link} to="/oNegative" target="_blank">O-</Nav.Link>
                                <Nav.Link as={Link} to="/abPositive" target="_blank">AB+</Nav.Link>
                                <Nav.Link as={Link} to="/abNegative" target="_blank">AB-</Nav.Link>
                            </NavDropdown>
                            <NavDropdown title="Donor List" id="basic-nav-dropdown">
                                <Nav.Link href="#A+">A+</Nav.Link>
                                <Nav.Link href="#A-">A-</Nav.Link>
                                <Nav.Link href="#B+">B+</Nav.Link>
                                <Nav.Link href="#B-">B-</Nav.Link>
                                <Nav.Link href="#O+">O+</Nav.Link>
                                <Nav.Link href="#O-">O-</Nav.Link>
                                <Nav.Link href="#AB+">AB+</Nav.Link>
                                <Nav.Link href="#AB-">AB-</Nav.Link>
                            </NavDropdown>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;
