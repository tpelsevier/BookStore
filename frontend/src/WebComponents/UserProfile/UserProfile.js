import React, { Component } from 'react';
import { Form, FormGroup, Button, FormControl, Col, ControlLabel, ButtonGroup, ButtonToolbar, Navbar } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import { changeProfile, getUserProfile } from '../../utils/APIUtils';

class UserProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        disabled: true
      };
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        getUserProfile()
        .then(response => {
            this.setState({
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email,
              });
        })
    }  
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleEditClik() {
        this.setState( {disabled: !this.state.disabled} )
      } 

    handleChangePass() {
        this.props.history.push("ChangePass");
    } 

    saveUserProfile(){
        const modifyProfileRequest = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,

        };
        changeProfile(modifyProfileRequest)
        
        // call API to save here
        alert('Updated User Info: \nfirst name: ' + this.state.firstName +
              '\nlast name: ' + this.state.lastName + 
              '\nemail: ' + this.state.email);
    }

    handleChangePass() {
        this.props.history.push("ChangePass");
    } 
    
    render() {
      return (
        <div class="UserProfile">
            <Form horizontal>
                <FormGroup controlId="firstName" bsSize="large">
                    <Col componentClass={ControlLabel} sm={1} smOffset={2}>
                    First Name
                    </Col>
                    <Col sm={6}>
                    <FormControl inputRef={input => this.firstName = input} disabled={this.state.disabled} type="text" defaultValue={this.state.firstName} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="lastName" bsSize="large">
                    <Col componentClass={ControlLabel} sm={1} smOffset={2}>
                    Last Name
                    </Col>
                    <Col sm={6}>
                    <FormControl inputRef={input => this.lastName = input} disabled={this.state.disabled} type="text" defaultValue={this.state.lastName} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="email" bsSize="large">
                    <Col componentClass={ControlLabel} sm={1} smOffset={2}>
                    Email
                    </Col>
                    <Col sm={6}>
                    <FormControl inputRef={input => this.email = input} disabled={this.state.disabled} type="email" defaultValue={this.state.email} onChange={this.handleChange}/>
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