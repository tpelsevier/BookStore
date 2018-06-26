import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem } from "react-bootstrap";
import { signup, getUserProfile } from '../../utils/APIUtils';
import "./SignUp.css";

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.firstname);
        console.log(this.state.lastname);
        console.log(this.state.email);
        console.log(this.state.password);

        const signupRequest = {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.password
        };

        const response = signup(signupRequest)
        // redirect if successful
        console.log(response)
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <ListGroup>
                        <ListGroupItem>
                            <FormGroup controlId="firstname" bsSize="large">
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="firstname"
                                    value={this.state.firstname}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="lastname" bsSize="large">
                                <ControlLabel>Last Name</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="lastname"
                                    value={this.state.lastname}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <Button
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                            >
                                Sign Up
                        </Button>

                        </ListGroupItem>
                    </ListGroup>
                </form>
            </div>
        );
    }
}