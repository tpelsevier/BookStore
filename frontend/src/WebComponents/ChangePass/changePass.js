import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Col, Form} from "react-bootstrap";

export default class ChangePass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPass: "",
      newPass: "",
      newPassConfirm:""
    };
  }

  handleChange = (event) => {
    this.setState({ currentPass: this.currentPass.value, newPass: this.newPass.value, newPassConfirm: this.newPassConfirm.value});
  };

  handleSubmit = event => {
    alert('Updated User Info: \noldpass: ' + this.state.currentPass +
    '\nnewpass: ' + this.state.newPass + 
    '\newPassConfirm: ' + this.state.newPassConfirm);
    event.preventDefault();
  }

  render() {
    return (
        <Form horizontal>
        <FormGroup controlId="formHorizontalEmail" bsSize="medium">
          <Col componentClass={ControlLabel} sm={1} smOffset={2}>
            Current Password
          </Col>
          <Col sm={6}>
            <FormControl inputRef={input => this.currentPass = input} type="password" onChange={this.handleChange.bind(this)}/>
          </Col>
        </FormGroup>
      
        <FormGroup controlId="formHorizontalPassword" bsSize="medium">
          <Col componentClass={ControlLabel} sm={1} smOffset={2}>
            New Password
          </Col>
          <Col sm={6}>
            <FormControl inputRef={input => this.newPass = input} type="password" onChange={this.handleChange.bind(this)}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword" bsSize="medium">
          <Col componentClass={ControlLabel} sm={1} smOffset={2}>
            Confirm Password
          </Col>
          <Col sm={6}>
            <FormControl inputRef={input => this.newPassConfirm = input} type="password" onChange={this.handleChange.bind(this)}/>
          </Col>
        </FormGroup>
      
        <FormGroup>
          <Col >
            <Button type="submit" bsSize="large" onClick = {this.handleSubmit.bind(this)}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

