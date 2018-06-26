import React, { Component } from 'react';
import { Form, FormGroup, Button, FormControl, Col, ControlLabel, NavItem, NavDropdown, Navbar } from 'react-bootstrap';

class UserProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
        firstName: 'test first name',
        lastName: 'test last name',
        email: 'test email',
        disabled: true

      };
    }
  
    handleNameChange = (event) => {
      this.setState({ name: event.target.value });
    };

    handleGameClik() {
        this.setState( {disabled: !this.state.disabled} )
      } 

    saveUserProfile(){

    }
    
    render() {
      return (
        <div>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    First Name
                    </Col>
                    <Col sm={6}>
                    <FormControl disabled={this.state.disabled} type="text" placeholder={this.state.firstName} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                    Last Name
                    </Col>
                    <Col sm={6}>
                    <FormControl disabled={this.state.disabled} type="text" placeholder={this.state.lastName} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>
                    <Col sm={6}>
                    <FormControl disabled={this.state.disabled} type="email" placeholder={this.state.email} />
                    </Col>
                </FormGroup>

                
            </Form>
            <Form inline>
                <FormGroup>
                    <Col smOffset={4} sm={4}>
                    <Button onClick = {this.handleGameClik.bind(this)}> Edit</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={4} sm={4} >
                    <Button disabled={this.state.disabled} onClick = {this.saveUserProfile.bind(this)}> Save</Button>
                    </Col>
                </FormGroup>
           
            </Form>
        </div>
      );
    }
  }

  export default UserProfile;