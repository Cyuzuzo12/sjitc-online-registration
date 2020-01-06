import React, { Component } from 'react';
import {
    Navbar
  } from "reactstrap";
import './header.css';
import FontAwesome from 'react-fontawesome';
import SideNav from './sideNavs';
const Header = (props) =>{
 
        return ( 
         <React.Fragment>
        <SideNav {...props}/>
        <header className="header">
        <div className="headerOption">
       
       </div>
       
       </header>
      
     
        </React.Fragment>
                 
         );
    
}
 
export default Header;