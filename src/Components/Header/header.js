import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

import './header.css';
import SideNav from './sideNavs';
import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";
import logo from 'C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/logo.png';

const Header = (props) =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
        return ( 
         <React.Fragment>
        <SideNav {...props}/>
        <header className="header">
        <div className="headerOption">
       <div className="logo">
       <img src={logo} alt="logo" />
       </div>
        <div className=" stud-photo">
                    <img src={avatar} alt="student-photo" />
                  
                  </div>
                         <UncontrolledDropdown >
              <DropdownToggle nav >
              <span className="text-white">cyuzuzonadd@gmail.com</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Edit Profile
                </DropdownItem>
                <DropdownItem>
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
       </div>
       
       </header>
      
     
        </React.Fragment>
                 
         );
    
}
 
export default Header;