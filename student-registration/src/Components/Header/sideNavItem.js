import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { Collapse} from 'reactstrap';
import "./side.css";
import avatar from "../../images/avatar.jpg";
import Auth from '../Auth';
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
  logout = ()=>{
    Auth.signout();
    }

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
                  
                  <FontAwesome name="home"/> <span style={{cursor:'pointer'}}>Student Registration</span>
                      <i className="fa fa-angle-left "></i>
                   
                  <Collapse isOpen={this.state.isOpen}>
                  <ul className="list-unstyled">
                    <li className="fa-options" > 
                      <Link to="/student-page">
                        <i className="fa fa-circle-o m-2"></i>
                        General
                      </Link>
                    </li>
                    <li className="fa-options" > 
                      <Link to="#" onClick={this.props.openFirst}>
                        <i className="fa fa-circle-o m-2"></i>
                        Student info
                      </Link>
                    </li>
                    <li className="fa-options" > 
                      <Link to="#" onClick={this.props.openSecond}>
                        <i className="fa fa-circle-o m-2"></i>
                        Residance place
                      </Link>
                    </li>
                    <li className="fa-options" > 
                      <Link to="" onClick={this.props.openThird}>
                        <i className="fa fa-circle-o m-2"></i>
                        Academic options
                      </Link>
                    </li>
                    <li className="fa-options"> 
                    <Link to="">
                        <i className="fa fa-circle-o m-2"></i>
                        Previous education
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
                 
                    <FontAwesome name="laptop"/> <span style={{cursor:'pointer'}}>Course Management</span>
                      <i className="fa fa-angle-left "></i>
                 
                  <ul className="list-unstyled " style={{display:this.state.course ? 'block':'none'}}>
                    <li>
                    <Link to="/">
                        <i className="fa fa-circle-o m-2"></i>
                        Timetable
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
                  
                  <FontAwesome name="file-text"/> <span style={{cursor:'pointer'}}>Marks</span>
                      <i className="fa fa-angle-left "></i>
                 
                    <ul className="list-unstyled" style={{display:this.state.mark ? 'block':'none'}}>
                    <li>
                    <Link to="/provison-mark">
                        <i className="fa fa-circle-o m-2"></i>
                      Provision marks
                      </Link>
                    </li>
                    <li>
                    <Link to="/transcript">
                        <i className="fa fa-circle-o m-2"></i>
                      Official transcript
                      </Link>
                    </li>
                  </ul>
                  
                </li>
                <li onClick={this.logout} style={{cursor:'pointer'}} className="sub-option">
                <FontAwesome name="sign-out"/> <span style={{cursor:'pointer'}}>logout</span>
                  
                  
                  </li>
              </ul>
            
            </section>
          );
    }
  }
export default SideNavItems;
