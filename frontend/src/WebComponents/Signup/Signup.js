import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem, Row, Col, Grid } from "react-bootstrap";
import { signup, getUserProfile } from '../../utils/APIUtils';
import "./SignUp.css";
// import { Row } from "antd";

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
        this.directLogin = this.directLogin.bind(this);
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

        signup(signupRequest)
            .then(response => {
                if (response.success == true) {
                    // localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                    // set logged in
                    this.props.history.push("Login");
                }
                else {
                    alert('invalid sign up');
                }
            })


    }

    directLogin() {
        this.props.history.push("Login");
    }

    render() {
        return (
            <div className="backgroundGradient">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={2}>
                        </Col>
                        <Col xs={8}>
                            <div  className="" >
                                <div className="spaceTitle">
                                    <h1>Nozama</h1>
                                    <h4>Make the most of your free time</h4>
                                </div>
                                <form onSubmit={this.handleSubmit} >
                                    <ListGroup >

                                        <ListGroupItem className="Login">
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
                                        <div className="right">
                                            Already on Nozama? <Button class="blue" onClick={this.directLogin}>Log in </Button>
                                        </div>
                                    </ListGroup>
                                </form>
                            </div>
                        </Col>
                        <Col xs={2}>
                        </Col>
                    </Row>
                </Grid>


            </div>


        );
    }
}