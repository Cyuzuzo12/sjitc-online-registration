import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./header";
import "./dashboard.css";
import DashboardHome from "./dashboardHome";

class Dashboard extends Component {
  state = {
    showNav: true
  };
  toogleSideNav = action => {
    this.setState({
      showNav: action
    });
  };
  render() {
    return (
      <React.Fragment>
        {/* <SideNavbar/> */}
        <Header/>
        <Switch>
          <Route path="/home" component={() => <DashboardHome />} />
          <Redirect to="/home" />
        </Switch>
      
      </React.Fragment>
    );
  }
}

export default Dashboard;
