import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { Collapse} from 'reactstrap';
import "./dashboard.css";

class AdminSideNavItem extends React.Component {

    state = {
      isOpen: false,
        first: true,
        second: true,
        third:true,
        fourth:true,
        fitft:true,
        sixth:true
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
            onClickThird =()=>{
              this.setState({
                third:!this.state.third
              })
                }
                onClickFourth =()=>{
                  this.setState({
                    fourth:!this.state.fourth
                  })
                    }
                    onClickFifth =()=>{
                      this.setState({
                        fifth:!this.state.fifth
                      })
                        }
                        onClickSixth =()=>{
                          this.setState({
                            sixth:!this.state.sixth
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
              <li onClick={this.onClickFirst} className="sub-option">
                  <Link>
                  <FontAwesome name="home"/> <span>Dashboard</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <div style={{display:this.state.first ? 'none' : 'block'}}>
                  <ul className="list-unstyled" >
                  <li className="fa-options"> 
                      <Link  to="/home">
                        <i className="fa fa-circle-o m-2"></i>
                        Admin
                      </Link>
                    </li>
                  <li className="fa-options"> 
                      <Link to="student">
                        <i className="fa fa-circle-o m-2"></i>
                      Student
                      </Link>
                    </li>
                   
                  </ul>
                  </div>
                </li>
                <li onClick={this.onClickSecond} className="sub-option">
                  <Link href="/student/registration/">
                  <FontAwesome name="user"/> <span>Registration</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <div style={{display:this.state.second ? 'none' : 'block'}}>
                  <ul className="list-unstyled" >
                 
                  <li className="fa-options"> 
                      <Link to="/advanced-level-registered-students">
                        <i className="fa fa-circle-o m-2"></i>
                        All Advanced Level Student
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/advanced-diploma-registered-students">
                        <i className="fa fa-circle-o m-2"></i>
                        Advanced Diploma & Diploma
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/all-students">
                        <i className="fa fa-circle-o m-2"></i>
                        Short Courses
                      </Link>
                    </li>
                   
                  </ul>
                  </div>
                </li>
              <li onClick={this.onClickThird} className="sub-option">
                  <Link href="">
                  <FontAwesome name="users"/> <span>Students</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <div style={{display:this.state.third ? 'none' : 'block'}}>
                  <ul className="list-unstyled" >
                  <li className="fa-options"> 
                      <Link to="/student">
                        <i className="fa fa-circle-o m-2"></i>
                        Student details
                      </Link>
                    </li>
                  <li className="fa-options"> 
                      <Link to="/student-details">
                        <i className="fa fa-circle-o m-2"></i>
                        Student details
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/admin-form">
                        <i className="fa fa-circle-o m-2"></i>
                       Admin Form
                      </Link>
                    </li>
                  <li className="fa-options"> 
                      <Link to="/advanced-level-registered-students">
                        <i className="fa fa-circle-o m-2"></i>
                       Advanced Level 
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/advanced-diploma-registered-students">
                        <i className="fa fa-circle-o m-2"></i>
                        Advanced Diploma
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/all-students">
                        <i className="fa fa-circle-o m-2"></i>
                        Short Courses
                      </Link>
                    </li>
                   
                  </ul>
                  </div>
                </li>
             
                <li onClick={this.onClickFourth} className="sub-option">
                  <Link href="/student/registration/">
                  <FontAwesome name="table"/> <span>Timetable</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  <div style={{display:this.state.fourth ? 'none' : 'block'}}>
                  <ul className="list-unstyled">
                  <li className="fa-options"> 
                      <Link to="/student">
                        <i className="fa fa-circle-o m-2"></i>
                        Student details
                      </Link>
                    </li>
                  <li className="fa-options"> 
                      <Link to="/advanced-level-registered-students">
                        <i className="fa fa-circle-o m-2"></i>
                        All Advanced Level Student
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/advanced-diploma-registered-students">
                        <i className="fa fa-circle-o m-2"></i>
                        Advanced Diploma & Diploma
                      </Link>
                    </li>
                    <li className="fa-options"> 
                      <Link to="/all-students">
                        <i className="fa fa-circle-o m-2"></i>
                        Short Courses
                      </Link>
                    </li>
                   
                  </ul>
                  </div>
                </li>
                <li onClick={this.onClickFifth} className="sub-option">
                  <Link href="/">
                  <FontAwesome name="file"/> <span>Attedance</span>
                      <i className="fa fa-angle-left "></i>
                   
                  </Link>
                  </li>
                  <li onClick={this.onClickSixth} className="sub-option">
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
