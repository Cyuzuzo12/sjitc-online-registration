import React, { useState } from 'react';
import SideNav, {  Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import FontAwesome from "react-fontawesome";
import {UncontrolledCollapse} from 'reactstrap';
import { Link } from "react-router-dom";
import "./sidenav.css";
import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";


const SideNavigation = () => {
    return ( <div>
       
        <SideNav 

style={{
    background:'#1898f8',
    minHeight:'400px',
    maxHeight:'1800px'
    
    
}}
        >
 <SideNav.Toggle />
 <SideNav.Nav 
 style={{
    background:'#fff',
    minHeight:'608px',
    maxHeight:'1800px',
    marginTop: '-15px',
    borderTop: '1px solid #054eaf',
    borderRight: '1px solid #e6e8e9'
 }}
 >
 <NavItem style={{marginTop:'10px'}}>
 <NavIcon>
   
                  <div className=" img-rounded">
                    <img src={avatar} alt="student-photo" width="60" height="80"/>
                  </div>
             
   </NavIcon>
 <NavText>

                  <Link className="text-dark">
                    <i class="fa fa-circle text-success" />
                    cyuzuzonadd@gmail.com
                  </Link>
 </NavText>
 </NavItem>
 <NavItem eventKey="home" style={{marginTop:'50px',minHeight:'40px'}} className="sub-option">
 <NavIcon>
 <FontAwesome name="home" className="text-dark" style={{ fontSize: '1.45em' }} />
                            {/* <i className="fa fa-fw fa-home text-dark" style={{ fontSize: '1.75em' }} /> */}
                        </NavIcon>
                       
                        <NavText >
                        <ul className="list-unstyled option">
                <li  id="toggler"  >
                  <Link href="/student/registration/">
                   <span >Student Registration</span>
                      <i className="fa fa-angle-left text-muted"></i>
                   
                  </Link>
                  <UncontrolledCollapse toggler="#toggler">
                  <ul className="list-unstyled " >
                    <li > 
                      <Link>
                        <i class="fa fa-circle-o m-2"></i>
                        General
                      </Link>
                    </li>
                  </ul>
                  </UncontrolledCollapse>
                </li>
                </ul> 
                        </NavText>
                        </NavItem>
                  
                  <NavItem className="sub-option">
                  <NavIcon>
                  <FontAwesome name="laptop" className="text-dark" style={{ fontSize: '1.45em' }} />
                      </NavIcon>
                      <NavText>
                      <ul className="list-unstyled option">
                        <li  >
                <Link href="/student/registration/">
                  <span>Course Management</span>
                    <i class="fa fa-angle-left "></i>
                </Link>
                <UncontrolledCollapse toggler="#toggler">
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
            
               </UncontrolledCollapse>
              </li>
                        </ul>
                      </NavText>
                  </NavItem> 
                  
                    <NavItem className="sub-option">
                    <NavIcon>
                    <FontAwesome name="file-text" className="text-dark" style={{ fontSize: '1.45em' }} />
                        </NavIcon>
                        <NavText>
                        <ul className="list-unstyled option">
                          <li  >
                  <Link href="/student/registration/">
                    <span>Marks</span>
                      <i class="fa fa-angle-left "></i>
                  </Link>
                  <UncontrolledCollapse toggler="#toggler">
                  <ul className="list-unstyled">
                   
                    <li>
                      <Link to="/attendance">
                        <i class="fa fa-circle-o m-2"></i>
                        Transcript
                      </Link>
                    </li>
                  </ul>
                 </UncontrolledCollapse>
                 
                </li>
                          </ul>
                        </NavText>
                    </NavItem>
                   
            </SideNav.Nav>
        </SideNav>
    </div> );
}
 
export default SideNavigation;