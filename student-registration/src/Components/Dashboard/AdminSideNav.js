import React from "react";
import SideNav from "react-simple-sidenav";
import SideNavItems from "./AdminSideNavItem";

const AdminSideNav = props => {
  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: "#faf607",
          maxWidth: "200px"
        }}
      >
        <div className="bars">
          <i
            className="fa fa-times fa-lg"
            onClick={props.onHideNav}
            style={{
              color: "#fff",
              padding: "10px",
              cursor: "pointer",
              fontSize: "25px"
            }}
          />
        </div>
        <SideNavItems {...props} />
      </SideNav>
    </div>
  );
};

export default AdminSideNav;
