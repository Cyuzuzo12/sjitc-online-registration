import React, { Component } from 'react';
import {
    Navbar
  } from "reactstrap";

import "./sidenav.css";
  import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
  import '@trendmicro/react-sidenav/dist/react-sidenav.css';
  import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";

class SideNavbar extends Component {
 
    render() { 
        return ( 
            <React.Fragment>
                <Navbar light expand="md" className="titlebar-blue bg-primary">
           </Navbar>
             <SideNav className="bg-primary"
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home" className="side-navbar bg-light">
                    <p> <img src={avatar} alt="student-photo" className=" img-fluid rounded-circle"  height="80"
                width="91"/></p>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home text-dark" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText className="text-dark">
                            Student Registration
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home text-dark" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText className="text-dark">
                            Student Registration
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home text-dark" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText className="text-dark">
                            Student Registration
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home text-dark" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText className="text-dark">
                            Student Registration
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavIcon>
                            <i className="fa fa-fw fa-device text-dark" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Devices
                        </NavText>
                    </NavItem>
                    <section >
        <div className="container">
        <ul className="list-unstyled">
         
         <li class="treeview">
            
                 <i class="fa fa-dedent"></i> <span>Student Registration</span>
                 <span class="pull-right-container">
                     <i class="fa fa-angle-left pull-right"></i>
                 </span>
            </li>
         </ul>
         <ul className="list-unstyled">
                  
                  <li class="treeview">
                     
                          <i class="fa fa-dedent"></i> <span>Student Registration</span>
                          <span class="pull-right-container">
                              <i class="fa fa-angle-left pull-right"></i>
                          </span>
                     </li>
                     </ul>
        </div>

                    </section>
                </SideNav.Nav>
            </SideNav>
         </React.Fragment>
         );
    }
}
 
export default SideNavbar;