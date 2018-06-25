import React, { Component } from 'react';
import { Alert, FormGroup, Button, FormControl, MenuItem, Nav, NavItem, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from './logo.svg';
import {Link} from 'react-router-dom';



class Header extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fluid >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h3> Nozama</h3>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Search Bar Here
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} >
                            <Link to="/about_us">About Us</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/user"> Log In </Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>        
            </Navbar>

        );
    }
}


export default Header;