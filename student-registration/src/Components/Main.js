import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import StudHeader from "./Header/header";
import AdmHeader from "./Dashboard/header";
import SignUp from "./sinUp";
import AdvancedDiplomaForm from "./Registration/advancedDiploma";
import MainFooter from "./Mainfooter";
import Attendance from "./CourseManagement/attendance";
import StudentRegistration from "./studentRegistration";
import SignIn from "./siniIn";
import AdvancedLevelForm from "./Registration/advancedLevel";
import TimeTable from "./CourseManagement/timeTable";
import StudentPage from "./StudentPage/studentPage";
import PrivateRoute from "./AuthRoutes/privateRoutes";
import AdminForm from "./Dashboard/Student/AdminForm";
import StudentDetails from "./Dashboard/Student/studentDetails";
import Student from "./Dashboard/Student/studentDash";
import AllStudents from "./Dashboard/allStudents";
import DashboardHome from "./Dashboard/dashboardHome";
import RegisteredDiploma from "./Dashboard/regDiploma";
import RegisteredStudents from "./Dashboard/registeredStudents";
import HeaderDef from "./Header/headerDef";
import Verification from "./DAO/verification";
import ProvisionMarks from "./Marks/provisionMark";
import Transcript from "./Marks/transcript";
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNav:true,
      first: true,
      second: false,
      third: false,
      fourth: false
    }
  }

  toggleSidenav = (action) =>{
      this.setState({
          showNav:action
      })
  }
  onClickFirst =()=>{
    this.setState({
      first:true
    })
      }
      onClickSecond =()=>{
        this.setState({
          first:false,
          third:false,
          second:true
        })
      }
          onClickThird =()=>{
            this.setState({
              first:false,
              third:true,
                  second:false
            })
              }
             
  
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        {this.props.auth === 'admin' ? 
        <AdmHeader
        showNav={this.state.showNav}
        onHideNav={() => this.toggleSidenav(false)}
        onOpenNav={() => this.toggleSidenav(true)}
        />
        : this.props.auth === 'student' ? 
        <StudHeader
        showNav={this.state.showNav}
        onHideNav={() => this.toggleSidenav(false)}
        onOpenNav={() => this.toggleSidenav(true)}
       openFirst={() =>this.onClickFirst()}
       openSecond={() =>this.onClickSecond()}
       openThird={()=>this.onClickThird()}
        />
        :
        <HeaderDef/>
        }
       
       
        <Switch>
          <Route  path="/sign-up" component={() => <SignUp />} />
          <Route  path="/verify-token" component={() => <Verification />} />
          <Route  path="/provison-mark" component={() => <ProvisionMarks />} />
          <Route  path="/transcript" component={() => <Transcript />} />
          <Route  path="/sign-in" component={()=> <SignIn/>}/>
          <PrivateRoute path="/student-page" component={()=> <StudentPage
          first={this.state.first}
          second={this.state.second}
          third={this.state.third}
          />}/>
          <PrivateRoute path="/&nc-student&nc-registration" component={()=> <StudentRegistration/>}/>
          <PrivateRoute path="/advanced-level-registration-form" component={() => <AdvancedLevelForm />} />
          <PrivateRoute path="/advanced-diploma-registration-form" component={() => <AdvancedDiplomaForm />} />
          <PrivateRoute path="/attendance" component={()=> <Attendance/>}/>
          <PrivateRoute path="/time-table" component={()=> <TimeTable/>}/>
          {/* dashboard pages */}
          <PrivateRoute path="/home" component={() => <DashboardHome />} />
          <PrivateRoute path="/all-students" component={() => <AllStudents/>}/>
          <PrivateRoute path="/student" component={() => <Student/>}/>
          <PrivateRoute path="/student-details" component={() => <StudentDetails/>}/>
          <PrivateRoute path="/admin-form" component={() => <AdminForm/>}/>
          <PrivateRoute path="/advanced-diploma-registered-students" component={() => <RegisteredDiploma/>}/>
          <PrivateRoute path="/advanced-level-registered-students" component={() => <RegisteredStudents/>}/>
          <Redirect to="/sign-up"/>
        </Switch>
        <MainFooter />
      </React.Fragment>
    );
  }
}

export default Main;
