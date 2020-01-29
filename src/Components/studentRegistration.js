import React, { Component } from "react";
import {  FormGroup, Label, Input,Col,Form,Button ,Row} from 'reactstrap';
import {Link } from 'react-router-dom';
import logo from '../images/logo.png';
class StudentRegistration extends Component {
  state = {
    advancedLevel: false,
    advancedDiploma: false
  };
  handleCheckAdvancedLevel =() =>{
    this.setState({advancedLevel: !this.state.advancedLevel});
    }
    handleCheckAdvancedDiploma =() =>{
      this.setState({advancedDiploma: !this.state.advancedDiploma});
      }
  render() {
    var msg;
	if (this.state.advancedLevel) {
	  msg = "advanced-level-registration-form";
  }else if(this.state.advancedDiploma){
    msg = "advanced-diploma-registration-form"; 
  } 
  
  else {
	  msg = "Un-checked";
	}
    return (
      <div>
     
        <section >
          <div className="container ">
            <div className="row justify-content-center ">
              <div className="col-md-11 col-sm-12 reg-form m-4">
                <h5 className="">
                  Start your application
                </h5>
<hr/>
<div className="row">
             <div className="col logo-img" >
                  <img src={logo} alt="logo" className=" img-fluid"  height="110"
                width="121"/>
               </div>
               
             </div>
             <div className="row">
             <div className="col " >
                <p className="text-muted ">Welcome to saint joseph intergrated technical college online application form for:Advanced Level A2, Advanced diploma and diploma students. 
               
              <ol>
                <strong> NB: </strong>
                <li>The email and password used to sign up will remain used until you get approved and get Through your email the confirmation notification with admission letter.</li>
              
               <li>Please make sure to attach correct required documents and picture because will be verified by, the office of the registration and it may cause you application to be accepted or rejected.</li></ol> </p>
               </div>
               
             </div>

                <Form>
               <Row className="form-group">
               <Col md={6}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="advanced-level" onChange={this.handleCheckAdvancedLevel} />{' '}
             Advanced Level(A2)
            </Label>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="advanced-diploma" onChange={this.handleCheckAdvancedDiploma} />{' '}
             Advanced Diploma & Diploma
            </Label>
          </FormGroup>
        </Col>
               </Row>
               <Row className="form-group">
               <Col sm={10}>
         
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio2"  />{' '}
            Short Courses
            </Label>
          </FormGroup>
        </Col>
               </Row>
      <Row className="form-group">
      <Col md={{ size: 4,offset: 8 }}>
                  <Link to={msg}>
                  <Button type="submit" color="primary">
                    <span><i className="fa fa-arrow-right fa-lg m-2"/>Continue</span>
                  </Button>
                  </Link>
                  
       </Col>
      </Row>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default StudentRegistration;
