import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
import { firebase } from "../../firebase";
const Header = (props)=> {
    
    return (
      <React.Fragment>
        
        <Navbar light expand="md" className="titlebar-blue">
          <div className="container">
            {/* <NavbarToggler onClick={this.openNav} className="mr" />

            <Collapse isOpen={this.state.isOpenNav} navbar> */}
             
              <Nav className="ml-auto " navbar>
                <NavItem >
                  <NavLink
                    className="nav-link font-weight-bold text-white sin"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={()=>{
                      firebase.auth().signOut()
                      .then(()=>{
                          props.history.push("/history")
                      })
                  }}
                    className="nav-link font-weight-bold text-white sin" to=""
                  >
                    Sign Out
                  </NavLink>
                </NavItem>
              </Nav>
            {/* </Collapse> */}
          </div>
        </Navbar>
        {/* =================sign in modal======================== */}
        
      </React.Fragment>
    );
  }


export default withRouter(Header);
