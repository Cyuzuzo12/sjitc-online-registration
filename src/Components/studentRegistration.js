import React, { Component } from "react";
import {  FormGroup, Label, Input,Col,Form,Button ,Row} from 'reactstrap';
import {Link } from 'react-router-dom';
import logo from '../images/logo.png';
class StudentRegistration extends Component {
  state = {};
  render() {
    return (
      <div>
     
        <section >
          <div className="container ">
            <div className="row justify-content-center m-4">
              <div className="col-md-8 col-sm-12 reg-form">
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
                <p className="text-muted ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
               </div>
               
             </div>

                <Form>
               <Row className="form-group">
               <Col md={6}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2"  />{' '}
             Advanced Diploma & Diploma
            </Label>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2"  />{' '}
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
                  <Link to="/student-page">
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
