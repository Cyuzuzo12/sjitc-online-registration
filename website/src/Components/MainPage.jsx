import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Header from "./header";
import HeaderAd from "./Dashboard/header";
import Footer from "./footer";
import Home from "./Home";
import AdvencedLevel from "./Academics/advancedLevelA2";
import History from "./history";
import AOS from "aos";
import "aos/dist/aos.css";
import MissionVision from "./missionVision";
import Team from "./Team/team";
import Diploma from "./Academics/advancedDiploma";
import Dashboard from "./Dashboard/dashboard";
import AdmissionAdvancedLevel from "./Admission/AdvancedLevel";
import AdmissionAdvancedDiploma from "./Admission/Diploma";
import ContactComponent from "./ContactComponent";
import PrivateRoute from "./AuthRoutes/privateRoutes";
import PublicRoute from "./AuthRoutes/publicRoutes";

AOS.init();

const MainPage = props => {
  console.log(props);
  return (
    <React.Fragment>
      {props.user ? <HeaderAd  user={props.user}/> : <Header  user={props.user} />}
      <Switch>
        <Route path="/home" component={() => <Home {...props} />} />
        <Route path="/contact-us" component={() => <ContactComponent />} />
        <Route path="/advenced-level" component={() => <AdvencedLevel />} />
        <Route path="/advenced-diploma" component={() => <Diploma />} />
        <Route
          path="/admission-for-advenced-level"
          component={() => <AdmissionAdvancedLevel />}
        />
        <Route
          path="/admission-for-advenced-diploma"
          component={() => <AdmissionAdvancedDiploma />}
        />
        <Route path="/mission-vision" component={() => <MissionVision />} />
        <Route path="/administration" component={() => <Team />} />
        <Route path="/history" component={() => <History />} />
        <PrivateRoute
           {...props}
          path="/dashboard"
          component={() => <Dashboard />}
        />

        <Redirect to="/home" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
