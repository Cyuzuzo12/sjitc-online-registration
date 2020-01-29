import React,{ useState } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { Collapse} from 'reactstrap';
import "./side.css";
import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";

class SideNavItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  
  toggle = () =>{
    this.setState({
      isOpen:!this.state.isOpen});
  };

  render(){
        return (
            <section className="navItem-stud" 
            
            >
              <div className="user-panel">
                <div className="pull-left">
                  <div className=" img-rounded">
                    <img src={avatar} alt="student-photo" width="60" height="80"/>
                  </div>
                </div>
                <div className="pull-left info">
                  <p>cyuzuzonadd@gmail.com</p>
                  <Link className="text-dark">
                    <i class="fa fa-circle text-success" />
                    Student page
                  </Link>
                </div>
              </div>
              <ul className="list-unstyled sideOption bg-light">
                <li onClick={this.toggle} className="sub-option">
                  <Link href="">
                  <FontAwesome name="home"/> <span>Student Registration</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <Collapse isOpen={this.state.isOpen}>
                  <ul className="list-unstyled">
                    <li className="fa-options" > 
                      <Link to="/student-page">
                        <i class="fa fa-circle-o m-2"></i>
                        General
                      </Link>
                    </li>
                    <li className="fa-options" > 
                      <Link onClick={this.props.openFirst}>
                        <i class="fa fa-circle-o m-2"></i>
                        Student Info
                      </Link>
                    </li>
                    <li className="fa-options" > 
                      <Link onClick={this.props.openSecond}>
                        <i class="fa fa-circle-o m-2"></i>
                        Residance Place
                      </Link>
                    </li>
                    <li className="fa-options" > 
                      <Link onClick={this.props.openThird}>
                        <i class="fa fa-circle-o m-2"></i>
                        Academic Options
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link>
                        <i class="fa fa-circle-o m-2"></i>
                        Secondary Education
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link>
                        <i class="fa fa-circle-o m-2"></i>
                       More information
                      </Link>
                    </li>
                  </ul>
                  </Collapse>
                </li>
                <li onClick={this.toggle}  className="sub-option">
                  <Link href="/student/registration/">
                    <FontAwesome name="laptop"/> <span>Course Management</span>
                      <i class="fa fa-angle-left "></i>
                  </Link>
                  <Collapse isOpen1={this.state.isOpen1}>
                  <ul className="list-unstyled">
                    <li>
                      <Link>
                        <i class="fa fa-circle-o m-2"></i>
                        TimeTable
                      </Link>
                    </li>
                    <li>
                      <Link to="/attendance">
                        <i class="fa fa-circle-o m-2"></i>
                        Attendance
                      </Link>
                    </li>
                  </ul>
                  </Collapse>
                 
                </li>
                <li onClick={this.toggle2}  className="sub-option">
                  <Link href="/student/registration/">
                  <FontAwesome name="file-text"/> <span>Marks</span>
                      <i class="fa fa-angle-left "></i>
                  </Link>
                  <Collapse isOpen2={this.state.isOpen2}>
                    <ul className="list-unstyled">
                    <li>
                      <Link>
                        <i class="fa fa-circle-o m-2"></i>
                       Transcript
                      </Link>
                    </li>
                  </ul>
                  </Collapse>
                  
                </li>
              </ul>
              {/* ================= */}
             {/* <ul className="list-unstyled option ">
                        <li  onClick={this.toggle}>
                        <FontAwesome name="users" className="text-warning" style={{ fontSize: '1.35em' }} /> 
                  <Link >
                   <span >Students</span>
                      <i className="fa fa-angle-left text-muted"></i>
                   
                  </Link>
                  <Collapse isOpen={this.state.isOpen}>
                  <ul className="list-unstyled " >
                <li > 
                      <Link to="/all-students">
                        <i class="fa fa-circle-o m-2"></i>
                        All student
                      </Link>
                    </li>
                    <li > 
                      <Link to="/advanced-level-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Advanced Level
                      </Link>
                    </li>
                    <li > 
                      <Link to="/advanced-diploma-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Advanced Diploma & Diploma
                      </Link>
                    </li>
                    <li > 
                      <Link to="/advanced-diploma-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Short Courses
                      </Link>
                    </li>
                  </ul>
                  </Collapse>
                  </li>
                  <li>
                <FontAwesome name="edit" className="text-warning" style={{ fontSize: '1.35em' }} /> 
                 <Link >
                   <span >Registration</span>
                      <i className="fa fa-angle-left text-muted"></i>
                   
                  </Link>
                  <Collapse toggler="#toggler">
                  <ul className="list-unstyled " >
                
                    <li > 
                      <Link to="/advanced-level-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Advanced Level
                      </Link>
                    </li>
                    <li > 
                      <Link to="/advanced-diploma-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Advanced Diploma & Diploma
                      </Link>
                    </li>
                    <li > 
                      <Link to="/all-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Short Courses
                      </Link>
                    </li>
                  </ul>
                  
       
      </Collapse>
       
     
                </li>
                </ul> */}
            </section>
          );
    }
  }
export default SideNavItems;
