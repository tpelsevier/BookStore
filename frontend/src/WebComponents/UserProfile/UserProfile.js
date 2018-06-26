import React, { Component } from 'react';
import { Form, FormGroup, Button, FormControl, Col, ControlLabel, ButtonGroup, ButtonToolbar, Navbar } from 'react-bootstrap';
import {withRouter} from "react-router-dom";

class UserProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
        firstName: 'test first name',
        lastName: 'test last name',
        email: 'test email',
        disabled: true
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange = (event) => {
      this.setState({ firstName: this.firstName.value, lastName: this.lastName.value, email: this.email.value});
    };

    handleEditClik() {
        this.setState( {disabled: !this.state.disabled} )
      } 

    handleChangePass() {
        this.props.history.push("ChangePass");
    } 

    saveUserProfile(){
        // call API to save here
        alert('Updated User Info: \nfirst name: ' + this.state.firstName +
              '\nlast name: ' + this.state.lastName + 
              '\nemail: ' + this.state.email);
    }
    
    render() {
      return (
        <div class="UserProfile">
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail" bsSize="large">
                    <Col componentClass={ControlLabel} sm={1} smOffset={2}>
                    First Name
                    </Col>
                    <Col sm={6}>
                    <FormControl inputRef={input => this.firstName = input} disabled={this.state.disabled} type="text" placeholder={this.state.firstName} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalText" bsSize="large">
                    <Col componentClass={ControlLabel} sm={1} smOffset={2}>
                    Last Name
                    </Col>
                    <Col sm={6}>
                    <FormControl inputRef={input => this.lastName = input} disabled={this.state.disabled} type="text" placeholder={this.state.lastName} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalText" bsSize="large">
                    <Col componentClass={ControlLabel} sm={1} smOffset={2}>
                    Email
                    </Col>
                    <Col sm={6}>
                    <FormControl inputRef={input => this.email = input} disabled={this.state.disabled} type="email" placeholder={this.state.email} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
            </Form>

                <ButtonGroup>
                    <Button onClick = {this.handleEditClik.bind(this)} bsSize="large" >
                    Edit
                    </Button>
                    <Button bsStyle="primary" disabled={this.state.disabled} onClick = {this.saveUserProfile.bind(this)} bsSize="large">
                    Save
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick = {this.handleChangePass.bind(this)} bsSize="large" >
                        Change Password
                    </Button>
                </ButtonGroup>
            
        </div>
      );
    }
  }

  export default withRouter(UserProfile);