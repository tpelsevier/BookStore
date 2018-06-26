import './Header.css';
import React, { Component } from 'react';
import { Alert, FormGroup, Button, FormControl, MenuItem, Nav, NavItem, NavDropdown, Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import {Link} from 'react-router-dom';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            searchResults: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        // get and display search results
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
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
                    <Nav pullLeft>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} >
                            <Link to="/about_us">About Us</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/Signup"> Sign Up </Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/login"> Log In </Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>        
            </Navbar>

        );
    }
}


export default Header;