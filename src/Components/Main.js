import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header/header";
import SignUp from "./sinUp";
import AdvancedDiplomaForm from "./Registration/advancedDiploma";
import MainFooter from "./Mainfooter";
import Attendance from "./CourseManagement/attendance";
import StudentRegistration from "./studentRegistration";
import SignIn from "./siniIn";
import AdvancedLevelForm from "./Registration/advancedLevel";
import TimeTable from "./CourseManagement/timeTable";

class Main extends Component {
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
        <Header
         
        />
        <Switch>
          <Route path="/sign-up" component={() => <SignUp />} />
          <Route path="/sign-in" component={()=> <SignIn/>}/>
          <Route path="/&nc-student&nc-registration" component={()=> <StudentRegistration/>}/>
          <Route path="/advanced-level-registration-form" component={() => <AdvancedLevelForm />} />
          <Route path="/advanced-diploma-registration-form" component={() => <AdvancedDiplomaForm />} />
          <Route path="/attendance" component={()=> <Attendance/>}/>
          <Route path="/time-table" component={()=> <TimeTable/>}/>
          <Redirect to="/sign-up" />
        </Switch>
        <MainFooter />
      </React.Fragment>
    );
  }
}

export default Main;
