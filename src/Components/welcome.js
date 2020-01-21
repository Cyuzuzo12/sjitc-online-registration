import React, { Component } from "react";
import SignUp from "./sinUp";
import SignIn from "./siniIn";
import { Route, Redirect, Switch } from "react-router-dom";
import Main from "./Main";
import Dashboard from "./Dashboard/dashboard";
class Welcome extends Component {
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
        {/* <Header
         
        /> */}
        <Switch>
          <Route path="/sign-up" component={() => <SignUp />} />
          <Route path="/sign-in" component={()=> <SignIn/>}/>
          <Route path="/student-page" component={()=> <Main/>}/>
          <Route path="/dashbord" component={()=> <Dashboard/>}/>
          <Redirect to="/sign-up" />
        </Switch>
        {/* <MainFooter /> */}
      </React.Fragment>
    );
  }
}

export default Welcome;
