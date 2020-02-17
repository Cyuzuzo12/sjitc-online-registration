import React from 'react';
import {Table, Col, Row, Button, Form,Breadcrumb,BreadcrumbItem, Input,Modal,ModalBody,ModalFooter,ModalHeader } from 'reactstrap';
import avatar from "../../images/avatar.jpg";
import {withRouter} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

class RegisteredStudents extends React.Component {
state = {
  students: [],
  admittedModal:false,
  rejectedModal:false
 }
  componentDidMount() {
    axios.get(`/students/all`)
      .then(res => {
        const students = res.data;
        this.setState({ students });
      })
  } 
    onSubmitAddmission = () => {
  
         this.props.history.push('/sign-in');

  }
  openAdmitModal=()=>{
    this.setState({
      admittedModal:!this.state.admittedModal
    })
  }
  openRejectModal=()=>{
    this.setState({
      rejectedModal:!this.state.rejectedModal
    })
  }
 render() {
    return (
    <div className="RegisteredStudents">
    
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
         <Col className="scroll">
         <Table striped  >
      <thead>
        <tr>
          <th>#</th>
          {/*<th>Reg.No</th>*/}
          <th>Photo</th>
          <th>Names</th>
          <th>Gender</th>
          <th>Date Of Birth</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Father's names</th>
          <th>Mother's names</th>
          <th>Guardian's names</th>
          <th>Parent Cont</th>
          <th>Nationality</th>
          <th>Address</th>
          <th>Ubudehe</th>
          <th>Insurance</th>
          <th>Health State</th>
          <th>Sponsor</th>
          <th>Att. School</th>
          <th>Comp. Year</th>
          <th>Results</th>
          <th>Option</th>
          <th>Bank Slip Number</th>
          <th>Passport Photo</th>
          <th>Bank Slip </th>
          <th>ID Image</th>
          <th>Result Slip </th>
          <th>Report 1</th>
          <th>Report 2</th>
          <th>Report 3</th>
          <th>Action</th>
        </tr>
      </thead>
      {/* { this.state.students.map(student =>  */}
      <tbody>
      
        <tr>
          {/* <th scope="row">{student.id}</th> */}
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td><a className="text-primary" href="#" onClick={()=>{window.open("")}}>@mdo </a></td>
          <td><a className="text-primary" href="#" onClick={()=>{window.open("")}}>@mdo </a></td>
          <td><a className="text-primary" href="#" onClick={()=>{window.open("")}}>@mdo </a></td>
          <td><a className="text-primary" href="#" onClick={()=>{window.open("")}}>@mdo </a></td>
          <td><a className="text-primary" href="#" onClick={()=>{window.open("")}}>@mdo </a></td>
          <td><a className="text-primary" href="#" onClick={()=>{window.open("")}}>@mdo </a></td>
          <td><a className="text-primary" href="#" onClick={()=>{window.open("")}}>@mdo </a></td>
          <td><a className="text-primary" href="#" onClick={()=>{window.open("")}}>@mdo </a></td>
          <td><a className="text-primary" href="#" onClick={()=>{window.open("")}}>@mdo </a></td>
          <td><span className="text-success mr-1 border" onClick={this.openAdmitModal} style={{
                 cursor:'pointer'
          }} >Admitted</span><span className="text-danger border" onClick={this.openRejectModal} style={{
            cursor:'pointer'
     }}>Rejected</span></td>
        </tr>
        
      </tbody>
      {/* )} */}
    </Table></Col>
       </Row>
        </div>
        {/* ===============================modals====================== */}
        <Modal isOpen={this.state.admittedModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        openAdmitModal={this.openAdmitModal} >
        <ModalHeader openAdmitModal={this.openAdmitModal}>Send Admission Letter</ModalHeader>
        <ModalBody>
          Send Admission Letter with registration Id on this email
           </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.onSubmitAddmission}>Send</Button>{' '}
          <Button color="secondary" onClick={this.openAdmitModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
      {/* =================================reject modal========== */}
      <Modal isOpen={this.state.rejectedModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        openRejectModal={this.openRejectModal} >
        <ModalHeader openRejectModal={this.openRejectModal}>Reject Registration</ModalHeader>
        <ModalBody>
          Send Rejection Message on this email
           </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.onSubmitAddmission}>Send</Button>{' '}
          <Button color="secondary" onClick={this.openRejectModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </section>
    </div>
  );

}
}
export default withRouter(RegisteredStudents);