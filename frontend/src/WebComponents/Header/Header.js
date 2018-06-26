import './Header.css';
import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import { Link } from 'react-router-dom';



class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fluid staticTop >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/home">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h3> Nozama</h3>
                        </Link>
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
                            <Link to="/home">Home</Link>
                        </NavItem>
                        <NavItem eventKey={2} >
                            <Link to="/about_us">About Us</Link>
                        </NavItem>
                        <NavItem eventKey={3} >
                            <Link to="/bookdetails">Book Details</Link>
                        </NavItem>
                        <NavItem eventKey={4}>
                            <Link to="/Signup"> Sign Up </Link>
                        </NavItem>
                        <NavItem eventKey={5}>
                            <Link to="/login"> Log In </Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}


export default Header;