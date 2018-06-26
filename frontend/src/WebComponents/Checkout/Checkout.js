import React, { Component } from 'react';
import { Col, Grid, Row, Form, ListGroup, ListGroupItem, ControlLabel, FormGroup, FormControl, Button, Jumbotron } from 'react-bootstrap';
import './Checkout.css';




class Checkout extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            street_address: '',
            cardNumber: '',
            cardType: '',
            cardVerificationNumber: '',
            expirationDate: ''

        }
        this.billingAddres = this.billingAddres.bind(this);
        this.paymentMethod = this.paymentMethod.bind(this);
        this.reviewOrder = this.reviewOrder.bind(this);

    }

    render() {
        return (
            <div>

                <Grid>
                    <Jumbotron className="jumbotroncart">
                        <h1>Checkout</h1>
                        <hr />
                        <p>Express Checkout... Please enter your details below to complete your purchase.</p>
                    </Jumbotron>
                    <Row className="show-grid" >
                        <Col xs={6} md={4}>
                            <h4>1. Billing Address</h4>
                            {this.billingAddres()}
                        </Col>
                        <Col xs={6} md={4}>
                            <h4>2. Payment Method</h4>
                            {this.paymentMethod()}
                        </Col>
                        <Col xsHidden md={4}>
                            <h4>3. Review Your Order</h4>
                            {this.reviewOrder()}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

    reviewOrder() {
        return (
            <ListGroup>
                <ListGroupItem href="#link1">Link 1</ListGroupItem>
                <ListGroupItem href="#link2">Link 2</ListGroupItem>
                <ListGroupItem>Trigger an alert</ListGroupItem>
            </ListGroup>
        );
    }

    paymentMethod() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <FormGroup controlId="cardType" bsSize="large">
                        <ControlLabel>Card Type: </ControlLabel>
                        <FormControl
                            autoFocus
                            type="cardType"
                            value={this.state.cardType}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="cardNumber" bsSize="large">
                        <ControlLabel>Card Number:</ControlLabel>
                        <FormControl
                            value={this.state.cardNumber}
                            onChange={this.handleChange}
                            type="cardNumber"
                        />
                    </FormGroup>
                    <FormGroup controlId="expirationDate" bsSize="large">
                        <ControlLabel>Expiration Date:</ControlLabel>
                        <FormControl
                            value={this.state.expirationDate}
                            onChange={this.handleChange}
                            type="expirationDate"
                        />
                    </FormGroup>
                    <FormGroup controlId="cardVerificationNumber" bsSize="large">
                        <ControlLabel>CVV:</ControlLabel>
                        <FormControl
                            value={this.state.cardVerificationNumber}
                            onChange={this.handleChange}
                            type="cardVerificationNumber"
                        />
                    </FormGroup>
                </ListGroupItem>
            </ListGroup>
        );
    }

    billingAddres() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <FormGroup controlId="firstName" bsSize="large">
                        <ControlLabel>First Name: </ControlLabel>
                        <FormControl
                            autoFocus
                            type="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="lastName" bsSize="large">
                        <ControlLabel>Last Name:</ControlLabel>
                        <FormControl
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            type="lastName"
                        />
                    </FormGroup>
                    <FormGroup controlId="street_address" bsSize="large">
                        <ControlLabel>Address:</ControlLabel>
                        <FormControl
                            value={this.state.street_address}
                            onChange={this.handleChange}
                            type="street_address"
                        />
                    </FormGroup>
                    <FormGroup controlId="zip_code" bsSize="large">
                        <ControlLabel>Zip Code:</ControlLabel>
                        <FormControl
                            value={this.state.zip_code}
                            onChange={this.handleChange}
                            type="zip_code"
                        />
                    </FormGroup>
                </ListGroupItem>
            </ListGroup>
        );
    }


}


export default Checkout;