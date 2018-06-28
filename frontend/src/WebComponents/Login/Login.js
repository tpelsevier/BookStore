import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem, form, Grid, Col, Row } from "react-bootstrap";
import { login } from '../../utils/APIUtils';
import { ACCESS_TOKEN } from '../../utils/Constants';
import "./Login.css";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.directSignup = this.directSignup.bind(this);
    }

    directSignup() {
        this.props.history.push("signup");
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
        console.log(this.state.email);
        console.log(this.state.password);

        const loginRequest = {
            email: this.state.email,
            password: this.state.password
        };

        login(loginRequest)
<<<<<<< HEAD
            .then(response => {

                localStorage.ACCESS_TOKEN = response.accessToken
                localStorage.setItem(localStorage.ACCESS_TOKEN, response.accessToken);
                this.props.onLogin();
                this.props.history.push("Home");
                console.log('hi');
                if (response.error == "Unauthorized") {
                    alert('invalid email or password');
                } else {
                    console.log(response.accessToken)
                    this.props.history.push("home");
                }
                //localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            })
=======
                .then(response => {
                    
                    localStorage.ACCESS_TOKEN = response.accessToken
                    //localStorage.setItem(localStorage.ACCESS_TOKEN, response.accessToken);
                    this.props.onLogin();
                    this.props.history.push("Home");    
                    if (response.error == "Unauthorized"){
                        alert('invalid email or password');
                    } else {
                        console.log(response.accessToken)
                        this.props.history.push("home");
                    }
                    //localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                })
>>>>>>> bcda0f074b019508e5a4c1033fe586e814283983
    }

    render() {
        return (
            <div className="backgroundGradient">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={2}>
                        </Col>
                        <Col xs={8}>
                            <div className="spaceTitle">
                                <h1>Log in</h1>
                            </div>
                            <div className="">
                                <form onSubmit={this.handleSubmit} className="">
                                    <ListGroup className = "">
                                        <ListGroupItem className ="Login">
                                            <FormGroup controlId="email" bsSize="large">
                                                <ControlLabel>Email</ControlLabel>
                                                <FormControl
                                                    autoFocus
                                                    type="email"
                                                    value={this.state.email}
                                                    onChange={this.handleChange}
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
                                                Login
                            </Button>
                                        </ListGroupItem>
                                        <div className="right">
                                            Need an account? <Button className="blue round" onClick={this.directSignup}>Sign up </Button>
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