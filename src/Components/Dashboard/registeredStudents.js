import React from 'react';
import {Table, Col, Row, Button, Form,Breadcrumb,BreadcrumbItem, Input } from 'reactstrap';
import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const RegisteredStudents = (props) => {
  return (
    <section>
         <Breadcrumb tag="nav" >
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Advanced Level (A2)</BreadcrumbItem>
      </Breadcrumb> 
        <div className="containers ">
        <Form>
      <Row form>
      <Col md={7}>
      <h6 className="font-weight-bold">Students Registered For Advanced Level (A2)</h6>
        </Col>
        
        <Col md={3} >
            <Input type="text"  placeholder="Search Here..." className="round-inp mb-2"/>
         
        </Col>
        <Col md={2}>
        <Button className="round-inp">Search</Button>
        </Col>
      </Row>
      </Form>
       <Row>
         <Col>
         <Table striped style={{background:'#fff'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Reg.No</th>
          <th>Photo</th>
          <th>Name</th>
          <th>Father's name</th>
          <th>Mother's name</th>
          <th>Program</th>
          <th>Option</th>
          <th>Date Of Birth</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td><i className="fa fa-edit text-success mr-2"/><i className="fa fa-trash text-danger"/></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td><i className="fa fa-edit text-success mr-2"/><i className="fa fa-trash text-danger"/></td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td><i className="fa fa-edit text-success mr-2"/><i className="fa fa-trash text-danger"/></td>
        </tr>
        <tr>
        <th scope="row">4</th>
        <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td><i className="fa fa-edit text-success mr-2"/><i className="fa fa-trash text-danger"/></td>
        </tr>
        <tr>
        <th scope="row">5</th>
        <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td><i className="fa fa-edit text-success mr-2"/><i className="fa fa-trash text-danger"/></td>
        </tr>
        <tr>
        <th scope="row">6</th>
        <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td><i className="fa fa-edit text-success mr-2"/><i className="fa fa-trash text-danger"/></td>
        </tr>
        <tr>
        <th scope="row">7</th>
        <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td><i className="fa fa-edit text-success mr-2"/><i className="fa fa-trash text-danger"/></td>
        </tr>
        <tr>
        <th scope="row">8</th>
        <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td><i className="fa fa-edit text-success mr-2"/><i className="fa fa-trash text-danger"/></td>
        </tr>
        <tr>
        <th scope="row">9</th>
        <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td><i className="fa fa-edit text-success mr-2"/><i className="fa fa-trash text-danger"/></td>
        </tr>
      </tbody>
    </Table></Col>
       </Row>
        </div>
    </section>
  );
}

export default RegisteredStudents;