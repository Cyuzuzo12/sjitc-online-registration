import React from "react";
import "./header.css";
import SideNav from "./sideNav";

const Header = props => {
  return (
    <React.Fragment>
      <SideNav {...props} />
      <header className="headers">
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
};

export default Header;
