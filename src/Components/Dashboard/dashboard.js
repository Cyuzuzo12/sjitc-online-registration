import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./header";
import "./dashboard.css";
import DashboardHome from "./dashboardHome";
import AllStudents from "./allStudents";
import RegisteredStudents from "./registeredStudents";
import RegisteredDiploma from "./regDiploma";
import Student from "./Student/studentDash";
import StudentDetails from "./Student/studentDetails";
import AdminForm from "./Student/AdminForm";
class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNav:true
    }
  }

  toggleSidenav = (action) =>{
      this.setState({
          showNav:action
      })
  }
  render() {
    return (
      <React.Fragment>
        <Header
        showNav={this.state.showNav}
        onHideNav={() => this.toggleSidenav(false)}
        onOpenNav={() => this.toggleSidenav(true)}
        />
        <Switch>
          <Route path="/home" component={() => <DashboardHome />} />
          <Route path="/all-students" component={() => <AllStudents/>}/>
          <Route path="/student" component={() => <Student/>}/>
          <Route path="/student-details" component={() => <StudentDetails/>}/>
          <Route path="/admin-form" component={() => <AdminForm/>}/>
          <Route path="/advanced-diploma-registered-students" component={() => <RegisteredDiploma/>}/>
          <Route path="/advanced-level-registered-students" component={() => <RegisteredStudents/>}/>
          <Redirect to="/home" />
        </Switch>
      
      </React.Fragment>
    );
  }
}

export default Dashboard;
