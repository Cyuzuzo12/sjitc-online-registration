import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { Collapse} from 'reactstrap';
import "./side.css";
import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";

class SideNavItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      course:false,
      mark:false
    }
  }
  openCourse=()=>{
    this.setState({
      course:!this.state.course
    })
  }
  openMark=()=>{
    this.setState({
      mark:!this.state.mark
    })
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
                    <img src={avatar} alt="studentphoto" width="60" height="80"/>
                  </div>
                </div>
                <div className="pull-left info">
                  <p>cyuzuzonadd@gmail.com</p>
                  <Link to="" className="text-dark">
                    <i className="fa fa-circle text-success" />
                    Student page
                  </Link>
                </div>
              </div>
              <ul className="list-unstyled sideOption bg-light">
                <li onClick={this.toggle} className="sub-option">
                  <Link to="">
                  <FontAwesome name="home"/> <span>Student Registration</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <Collapse isOpen={this.state.isOpen}>
                  <ul className="list-unstyled">
                    <li className="fa-options" > 
                      <Link to="/student-page">
                        <i className="fa fa-circle-o m-2"></i>
                        General
                      </Link>
                    </li>
                    <li className="fa-options" > 
                      <Link to="" onClick={this.props.openFirst}>
                        <i className="fa fa-circle-o m-2"></i>
                        Student Info
                      </Link>
                    </li>
                    <li className="fa-options" > 
                      <Link to="" onClick={this.props.openSecond}>
                        <i className="fa fa-circle-o m-2"></i>
                        Residance Place
                      </Link>
                    </li>
                    <li className="fa-options" > 
                      <Link to="" onClick={this.props.openThird}>
                        <i className="fa fa-circle-o m-2"></i>
                        Academic Options
                      </Link>
                    </li>
                    <li className="fa-options"> 
                    <Link to="">
                        <i className="fa fa-circle-o m-2"></i>
                        Secondary Education
                      </Link>
                    </li>
                    <li className="fa-options"> 
                    <Link to="">
                        <i className="fa fa-circle-o m-2"></i>
                       More information
                      </Link>
                    </li>
                  </ul>
                  </Collapse>
                </li>
                <li  className="sub-option" onClick={this.openCourse}>
                  <Link to="">
                    <FontAwesome name="laptop"/> <span>Course Management</span>
                      <i className="fa fa-angle-left "></i>
                  </Link>
                  <ul className="list-unstyled " style={{display:this.state.course ? 'block':'none'}}>
                    <li>
                    <Link to="">
                        <i className="fa fa-circle-o m-2"></i>
                        TimeTable
                      </Link>
                    </li>
                    <li>
                      <Link to="/attendance">
                        <i className="fa fa-circle-o m-2"></i>
                        Attendance
                      </Link>
                    </li>
                  </ul>
                 
                </li>
                <li onClick={this.openMark}  className="sub-option">
                  <Link to="/student/registration/">
                  <FontAwesome name="file-text"/> <span>Marks</span>
                      <i className="fa fa-angle-left "></i>
                  </Link>
                    <ul className="list-unstyled" style={{display:this.state.mark ? 'block':'none'}}>
                    <li>
                    <Link to="">
                        <i className="fa fa-circle-o m-2"></i>
                       Transcript
                      </Link>
                    </li>
                  </ul>
                  
                </li>
              </ul>
            
            </section>
          );
    }
  }
export default SideNavItems;
