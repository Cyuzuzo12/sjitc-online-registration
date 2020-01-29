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
import StudentPage from "./StudentPage/studentPage";
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
    return (
      <React.Fragment>
        <Header
        showNav={this.state.showNav}
        onHideNav={() => this.toggleSidenav(false)}
        onOpenNav={() => this.toggleSidenav(true)}
        // first={this.state.first}
        // second={this.state.second}
        // third={this.state.third}
       openFirst={() =>this.onClickFirst()}
       openSecond={() =>this.onClickSecond()}
       openThird={()=>this.onClickThird()}
        />
        <Switch>
          <Route path="/sign-up" component={() => <SignUp />} />
          <Route path="/sign-in" component={()=> <SignIn/>}/>
          <Route path="/student-page" component={()=> <StudentPage
          first={this.state.first}
          second={this.state.second}
          third={this.state.third}
          />}/>
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
