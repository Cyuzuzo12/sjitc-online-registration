import React from "react";
import "./header.css";
import logo from '../../images/logo.png';
import SideNav from "./sideNav";

const Header = props => {
  return (
    <React.Fragment>
      
      <header className="headers">
      <SideNav {...props} />
        <div className="headerOption">
          <div className="bars ">
            <i
              className="fa fa-bars fa-lg"
              onClick={props.onOpenNav}
              style={{
                color: "#dfdfdf",
                padding: "10px",
                cursor: "pointer"
              }}
            />
          </div>
          <div className="logos">
       <img src={logo} alt="logo" />
       </div>
      
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
};

export default Header;
