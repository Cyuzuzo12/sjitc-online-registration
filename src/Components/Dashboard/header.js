import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import "./dashboard.css";
import SideNavigation  from './sidnav';
import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";
import logo from 'C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/logo.png';

const DashHeader = (props) =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
        return ( 
         <React.Fragment>
        <SideNavigation  />
        <header className="header">
        {/* <div className="headerOption"> */}
      <div className="container">
      <div className="row">
        <div className="col-4">
        <span className="text-muted"><i className="fa fa-graduation-cap fa-lg m-2 text-muted"/>Welcome To Sjitc School Management System</span>
        </div>
        <div className="col-8">
        <form>
       <div className="form-row">
       <div className="col-6">
                      <div className="search">
  <span> <i className="fa fa-search"/></span>
  <input placeholder="Search Here..." className="form-control"/>
</div>
                    </div>
                    <div className="col-6">
                    <div className=" stud-photo">
                    <img src={avatar} alt="student-photo" />
                    {/* <Link>Admin</Link> */}
                    {/* <UncontrolledDropdown >
              <DropdownToggle nav >
              <p className="text-muted">Admin</p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
                  </div>   
                    </div>
                  </div>
       </form>
        </div>
      </div>
      </div>
       
       {/* </div> */}
       
       </header>
      
     
        </React.Fragment>
                 
         );
    
}
 
export default DashHeader;