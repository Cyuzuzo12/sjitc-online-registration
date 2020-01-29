import React,{ useState } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { Collapse} from 'reactstrap';
import "./dashboard.css";
import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";

class AdminSideNavItem extends React.Component {

    state = {
      isOpen: false,
        first: true,
        second: true
    };
    onClickFirst =()=>{
      this.setState({
        first:!this.state.first
      })
        }
        onClickSecond =()=>{
          this.setState({
            second:!this.state.second
          })
            }
  toggle = () =>{
    this.setState({
      isOpen:!this.state.isOpen});
  };

  render(){
        return (
            <section className="navItem" >
            
              <ul className="list-unstyled option ">
              <li onClick={this.onClickSecond} className="sub-option">
                  <Link>
                  <FontAwesome name="home"/> <span>Dashboard</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <div style={{display:this.state.second ? 'none' : 'block'}}>
                  <ul className="list-unstyled" >
                  <li className="fa-options"> 
                      <Link  to="/home">
                        <i class="fa fa-circle-o m-2"></i>
                        Admin
                      </Link>
                    </li>
                  <li className="fa-options"> 
                      <Link to="student">
                        <i class="fa fa-circle-o m-2"></i>
                      Student
                      </Link>
                    </li>
                   
                  </ul>
                  </div>
                </li>
              <li onClick={this.onClickSecond} className="sub-option">
                  <Link href="">
                  <FontAwesome name="users"/> <span>Students</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <div style={{display:this.state.second ? 'none' : 'block'}}>
                  <ul className="list-unstyled" >
                  <li className="fa-options"> 
                      <Link to="/student-details">
                        <i class="fa fa-circle-o m-2"></i>
                        Student details
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/admin-form">
                        <i class="fa fa-circle-o m-2"></i>
                       Admin Form
                      </Link>
                    </li>
                  <li className="fa-options"> 
                      <Link to="/advanced-level-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                       Advanced Level 
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/advanced-diploma-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Advanced Diploma
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/all-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Short Courses
                      </Link>
                    </li>
                   
                  </ul>
                  </div>
                </li>
              <li onClick={this.onClickFirst} className="sub-option">
                  <Link href="/student/registration/">
                  <FontAwesome name="user"/> <span>Teachers</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <div style={{display:this.state.first ? 'none' : 'block'}}>
                  <ul className="list-unstyled" >
                  <li className="fa-options"> 
                      <Link to="/student">
                        <i class="fa fa-circle-o m-2"></i>
                        Student details
                      </Link>
                    </li>
                  <li className="fa-options"> 
                      <Link to="/advanced-level-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        All Advanced Level Student
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/advanced-diploma-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Advanced Diploma & Diploma
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/all-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Short Courses
                      </Link>
                    </li>
                   
                  </ul>
                  </div>
                </li>
                <li onClick={this.toggle} className="sub-option">
                  <Link href="/student/registration/">
                  <FontAwesome name="table"/> <span>Timetable</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <Collapse isOpen={this.state.isOpen}>
                  <ul className="list-unstyled">
                  <li className="fa-options"> 
                      <Link to="/student">
                        <i class="fa fa-circle-o m-2"></i>
                        Student details
                      </Link>
                    </li>
                  <li className="fa-options"> 
                      <Link to="/advanced-level-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        All Advanced Level Student
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/advanced-diploma-registered-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Advanced Diploma & Diploma
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/all-students">
                        <i class="fa fa-circle-o m-2"></i>
                        Short Courses
                      </Link>
                    </li>
                   
                  </ul>
                  </Collapse>
                </li>
                <li onClick={this.onClickFirst} className="sub-option">
                  <Link href="/">
                  <FontAwesome name="file"/> <span>Attedance</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  </li>
                  <li onClick={this.onClickFirst} className="sub-option">
                  <Link href="/">
                  <FontAwesome name="graduation-cap"/> <span>Exam</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  </li>
               </ul>
            </section>
          );
    }
  }
export default AdminSideNavItem;
