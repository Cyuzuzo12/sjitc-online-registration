import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./header";
import "./dashboard.css";
import DashboardHome from "./dashboardHome";
import AllStudents from "./allStudents";
import RegisteredStudents from "./registeredStudents";
import RegisteredDiploma from "./regDiploma";

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
          <Route path="/all-students" component={() => <AllStudents/>}/>
          <Route path="/advanced-diploma-registered-students" component={() => <RegisteredDiploma/>}/>
          <Route path="/advanced-level-registered-students" component={() => <RegisteredStudents/>}/>
          <Redirect to="/home" />
        </Switch>
      
      </React.Fragment>
    );
  }
}

export default Dashboard;
