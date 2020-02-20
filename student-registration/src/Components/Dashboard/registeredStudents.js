import React from "react";
import {
  Table,
  Col,
  Row,
  Button,
  Form,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import avatar from "../../images/avatar.jpg";
import { withRouter } from "react-router-dom";
import { firebase } from "./../../firebase";
import { admitted } from "../DAO/UserFunctions";

import axios from "axios";

class RegisteredStudents extends React.Component {
  state = {
    students: [],
    admittedModal: false,
    rejectedModal: false,
    Message: "",
    stId: ""
  };
  componentWillMount(){
    firebaseLeaders.once('value')
    .then((snapshot)=>{
       const leaders = fireBaseLooper(snapshot);
       const asyncFunction = (item,i,cb) =>{
           firebase.storage().ref('images')
           .child(item.image).getDownloadURL()
           .then(url => {
               leaders[i].image = url;
               cb();
           })
       }
       let requests = leaders.map((item,i) =>{
           return new Promise((resolve)=> {
               asyncFunction(item,i, resolve)
           })
       })

       Promise.all(requests).then(()=>{
           this.setState({
               leaders
           })
       })
    })
    
}
  componentDidMount() {
    axios.get(`/students/all`).then(res => {
      const students = res.data;
      this.setState({
        students
      });
    });
  }
  onSubmitAddmission = e => {
    e.preventDefault();
    const regNo = {
      stId: this.state.stId
    };
    admitted(regNo).then(res => {
      this.setState({
        Message: " Admission Letter with registration Id have been sent "
      });
    });
    console.log(regNo);
  };
  onSubmitRejection = e => {
    e.preventDefault();
    // reject(this.state.stId).then(res => {

    //   this.setState({
    //     Message:" Registration rejected!!! "
    //   })

    // })
  };

  openadmitmodal = () => {
    this.setState({
      admittedModal: !this.state.admittedModal
    });
  };
  openRejectModal = () => {
    this.setState({
      rejectedModal: !this.state.rejectedModal
    });
  };
  render() {
    return (
      <div className="RegisteredStudents">
        <section>
          <Breadcrumb tag="nav">
            <BreadcrumbItem tag="a" href="#">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Advanced Level (A2)
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="containers ">
            <Form>
              <Row form>
                <Col md={7}>
                  <h6 className="font-weight-bold">
                    Students Registered For Advanced Level (A2)
                  </h6>
                </Col>

                <Col md={3}>
                  <Input
                    type="text"
                    placeholder="Search Here..."
                    className="round-inp mb-2"
                  />
                </Col>
                <Col md={2}>
                  <Button className="round-inp">Search</Button>
                </Col>
              </Row>
            </Form>
            <Row>
              <Col className="scroll">
                <Table striped>
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
                  {this.state.students.map(student => (
                    <tbody>
                      <tr>
                        <th scope="row">{student.id}</th>
                        <td>
                          <img
                            src={student.passportPhoto}
                            alt="student"
                            className="rounded-circle"
                            width="30"
                            height="30"
                          />
                        </td>
                        <td>
                          {student.FirstName} {student.LastName}
                        </td>
                        <td>{student.Gender}</td>
                        <td>{student.DOB}</td>
                        <td>{student.PhoneNo}</td>
                        <td>{student.email}</td>
                        <td>{student.FatherNames}</td>
                        <td>{student.MotherNames}</td>
                        <td>{student.guardian}</td>
                        <td>{student.parentContact}</td>
                        <td>{student.Province}</td>
                        <td>{student.District}</td>
                        <td>{student.Nationality}</td>
                        <td>@mdo</td>
                        <td>{student.ubudehe}</td>
                        <td>{student.insurance}</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>

                        <td>
                          <a
                            className="text-primary"
                            href="#"
                            onClick={() => {
                              window.open("");
                            }}
                          >
                            @mdo{" "}
                          </a>
                        </td>
                        <td>
                          <a
                            className="text-primary"
                            href="#"
                            onClick={() => {
                              window.open("");
                            }}
                          >
                            @mdo{" "}
                          </a>
                        </td>
                        <td>
                          <a
                            className="text-primary"
                            href="#"
                            onClick={() => {
                              window.open("");
                            }}
                          >
                            @mdo{" "}
                          </a>
                        </td>
                        <td>
                          <a
                            className="text-primary"
                            href="#"
                            onClick={() => {
                              window.open("");
                            }}
                          >
                            @mdo{" "}
                          </a>
                        </td>
                        <td>
                          <a
                            className="text-primary"
                            href="#"
                            onClick={() => {
                              window.open("");
                            }}
                          >
                            @mdo{" "}
                          </a>
                        </td>
                        <td>
                          <a
                            className="text-primary"
                            href="#"
                            onClick={() => {
                              window.open("");
                            }}
                          >
                            @mdo{" "}
                          </a>
                        </td>
                        <td>
                          <a
                            className="text-primary"
                            href="#"
                            onClick={() => {
                              window.open("");
                            }}
                          >
                            @mdo{" "}
                          </a>
                        </td>
                        <td>
                          <a
                            className="text-primary"
                            href="#"
                            onClick={() => {
                              window.open("");
                            }}
                          >
                            @mdo{" "}
                          </a>
                        </td>
                        <td>
                          <a
                            className="text-primary"
                            href="#"
                            onClick={() => {
                              window.open("");
                            }}
                          >
                            @mdo{" "}
                          </a>
                        </td>

                        <td>
                          <form onSubmit={this.onSubmitAddmission}>
                            <button
                              type="submit"
                              className="bg-success text-white"
                              value={student.id}
                              onClick={() => {
                                this.setState({
                                  stId: student.id,
                                  admittedModal: !this.state.admittedModal
                                });
                              }}
                            >
                              Admitted
                            </button>
                          </form>
                          <form onSubmit={this.onSubmitRejection}>
                            <button
                              type="submit"
                              className="bg-danger text-white"
                              value={student.id}
                              onClick={() => {
                                this.setState({ stId: student.id,rejectedModal: !this.state.rejectedModal });
                              }}
                            >
                              Rejected
                            </button>
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </Col>
            </Row>
          </div>
          {/* ===============================modals====================== */}
          <Modal
            isOpen={this.state.admittedModal}
            modalTransition={{ timeout: 700 }}
            backdropTransition={{ timeout: 1300 }}
            toggle={this.openadmitmodal}
          >
            <ModalHeader toggle={this.openadmitmodal}>
              Send Admission Letter
            </ModalHeader>
            <ModalBody>
              <span className="text-success font-weight-bold">
                {this.state.Message}
              </span>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={this.openadmitmodal}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
          {/* =================================reject modal========== */}
          <Modal
            isOpen={this.state.rejectedModal}
            modalTransition={{ timeout: 700 }}
            backdropTransition={{ timeout: 1300 }}
            toggle={this.openRejectModal}
          >
            <ModalHeader toggle={this.openRejectModal}>
              Reject Registration
            </ModalHeader>
            <ModalBody>
              <span className="text-danger font-weight-bold">
                {this.state.Message}
              </span>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.openRejectModal}>
                Ok
              </Button>
            </ModalFooter>
          </Modal>
        </section>
      </div>
    );
  }
}
export default withRouter(RegisteredStudents);
