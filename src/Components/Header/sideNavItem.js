import React,{ useState } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { Collapse} from 'reactstrap';
import "./sidenav.css";
import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";

class SideNavItems extends React.Component {

    state = {
      isOpen: false,
      isOpen1: false,
      isOpen2: false
    };
  
  toggle = () =>{
    this.setState({
      isOpen:!this.state.isOpen});
  };
  toggle1 = () =>{
    this.setState({
      isOpen1:!this.state.isOpen1});
  };
  toggle2 = () =>{
    this.setState({
      isOpen2:!this.state.isOpen2});
  };
  render(){
        return (
            <section className="navItems">
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
              <ul className="list-unstyled option">
                <li onClick={this.toggle1} className="sub-option">
                  <Link href="/student/registration/">
                  <FontAwesome name="home"/> <span>Student Registration</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <Collapse isOpen1={this.state.isOpen1}>
                  <ul className="list-unstyled">
                    <li > 
                      <Link>
                        <i class="fa fa-circle-o m-2"></i>
                        General
                      </Link>
                    </li>
                  </ul>
                  </Collapse>
                </li>
                <li onClick={this.toggle1}  className="sub-option">
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
              {/* <div className="option">
                  <ul> Student Registration
                   <li >
                    <Link>
                    <FontAwesome name="home"/>
                    Student Details
                    </Link>
             
                </li>
                   </ul>
                   <ul>   <FontAwesome name="home"/>Course Management
                   <li >
                    <Link>
                   Timetable
                    </Link>
             
                </li>
                <li >
                    <Link>
                   Attendance
                    </Link>
             
                </li>
                <li >
                    <Link>
                  
                   TimeTable
                    </Link>
             
                </li>
                   </ul>
                  </div> */}
            </section>
          );
    }
  }
export default SideNavItems;
