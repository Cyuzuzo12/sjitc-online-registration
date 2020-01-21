import React, { useState } from 'react';
import SideNav, {  Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import FontAwesome from "react-fontawesome";
import {Collapse} from 'reactstrap';
import { Link } from "react-router-dom";
import "./dashboard.css";
// import avatar from "images/avatar.jpg";

class SideNavigation extends React.Component {
  state = { 
    isOpen: false,
    openRegi: false
   }
   toggle = () =>{
    this.setState({
      isOpen:!this.state.isOpen});
  };
  toggleRegi = () =>{
    this.setState({
      openRegi:!this.state.openRegi});
  };
  render() { 
  
 
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {setIsOpen(!isOpen)};
    return ( <div>
       
        <SideNav 

style={{
    background:'#faf607',
    minHeight:'400px',
    maxHeight:'1800px'
    
    
}}
        >
 <SideNav.Toggle />
 <SideNav.Nav 
 style={{
    background:'#042354',
    minHeight:'1008px',
    maxHeight:'1800px',
    marginTop: '-15px',
    // borderTop: '1px solid #054eaf',
    borderRight: '1px solid #e6e8e9'
 }}
 >
 <NavItem  style={{marginTop:'50px'}} >
 <NavIcon>
 <FontAwesome name="home" className="text-warning" style={{ fontSize: '1.45em' }} />
                         
                        </NavIcon>
                      
                        <NavText>
                        <Link to="/home">
                   DashBoard
                  </Link>
                          </NavText></NavItem>
 <NavItem   >
<NavIcon></NavIcon>
                      
                        <NavText 
                        
                        >
                        <ul className="list-unstyled opts ">
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
                  <ul className="list-unstyled s sub-s">
                <li  id="#toggler" >
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
                </ul> 
       
      {/* </Collapse> */}
                </li>
                </ul>
                </NavText>
                </NavItem>
               
            </SideNav.Nav>
        </SideNav>
    </div> );
}
}
export default SideNavigation;