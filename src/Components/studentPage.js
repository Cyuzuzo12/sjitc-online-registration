import React, { Component } from 'react';
import {
    Label,
    Row,
    Col,
    Button
  } from "reactstrap";
  import logo from '../images/logo.png';
  import { Link } from "react-router-dom";
  import { Control, Form, Errors } from 'react-redux-form';
  import { connect } from 'react-redux';
  
  const required = val => val && val.length;
  const maxLength = len => val => !val || val.length <= len;
  const minLength = len => val => val && val.length >= len;
  const isNumber = val => !isNaN(Number(val));
  const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class StudentPage extends Component {
    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        this.props.postFeedback(values);
        // event.preventDefault();
    }
    render() { 
        return (  <div>

<div className="row justify-content-center p-5">
          <div className="col-md-4 bg-light sign-form">
             <div className="row">
             <div className="col logo-img" >
                  <img src={logo} alt="logo" className=" img-fluid"  height="110"
                width="121"/>
              
                <p className="logo-text font-weight-bold"> Saint Joseph Integrated Technical College</p>   
                </div>
             </div>
          <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>
          <Row className="form-group">
                <Col md={{ size: 9, offset: 2 }}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required, validEmail
                  }}
                   ></Control.text>
              <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                      required: 'Required',
                      validEmail: 'Invalid Email Address'
                  }}
               />
               
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 9, offset: 2 }}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Phone number"
                    className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                  }}
                   />
              <Errors
                  className="text-danger"
                  model=".telnum"
                  show="touched"
                  messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 numbers',
                      maxLength: 'Must be 15 numbers or less',
                      isNumber: 'Must be a number'
                  }}
               />
                </Col>
              </Row>
              
              <Row className="form-group">
                <Col md={{ size: 9, offset: 2 }}>
                  <Control.password
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Enter password"
                    className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                  }}
                   />
              <Errors
                  className="text-danger"
                  model=".telnum"
                  show="touched"
                  messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 numbers',
                      maxLength: 'Must be 15 numbers or less',
                      isNumber: 'Must be a number'
                  }}
               />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 9, offset: 2 }}>
                  <Control.password
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Confirm password"
                    className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                  }}
                   />
              <Errors
                  className="text-danger"
                  model=".telnum"
                  show="touched"
                  messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 numbers',
                      maxLength: 'Must be 15 numbers or less',
                      isNumber: 'Must be a number'
                  }}
               />
                </Col>
              </Row>
            
              <Row className="form-group">
              <Col md={6}>
              <Link>Already have account?</Link>
                </Col>
                <Col md={{ size: 3,offset: 2 }}>
                  <Button type="submit" color="primary">
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </Form>
            
          </div>
        </div>
        </div>);
    }
}
 
export default StudentPage;