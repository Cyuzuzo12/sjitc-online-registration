import React from 'react';
// import {UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
// import logo from '../../images/logo.png';
import './header.css';
import SideNav from './sideNav';
import FontAwesome from 'react-fontawesome';

const Header = (props) =>{
 
        return ( 
         <React.Fragment>
        <SideNav {...props}/>
        <header className="headers">
        <div className="headerOption">
        <div className="bars ">
        <i className="fa fa-bars fa-lg"
            onClick={props.onOpenNav}
        />
    </div>
       {/* <div className="logo">
       <img src={logo} alt="logo" />
       </div>
       */}
        {/* <div className=" stud-photo">
                    <img src={avatar} alt="student-photo" />
                  
                  </div> */}
                         {/* <UncontrolledDropdown >
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
            </UncontrolledDropdown> */}
       </div>
       
       </header>
      
     
        </React.Fragment>
                 
         );
    
}
 
export default Header;