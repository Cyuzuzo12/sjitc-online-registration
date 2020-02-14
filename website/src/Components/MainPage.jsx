import React from 'react';
import { Switch,Redirect,Route} from "react-router-dom";
import Header from "./header";
import HeaderAd from "./Dashboard/header";
import Footer from "./footer";
import Home from "./Home";
import AdvencedLevel from './Academics/advancedLevelA2';
import History from './history';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import MissionVision from './missionVision';
import Team from './Team/team';
import Diploma from './Academics/advancedDiploma';
import Dashboard from './Dashboard/dashboard';
import AdmissionAdvancedLevel from './Admission/AdvancedLevel';
import AdmissionAdvancedDiploma from './Admission/Diploma';
import ContactComponent from './ContactComponent';
import PrivateRoute from './AuthRoutes/privateRoutes';
import PublicRoute from './AuthRoutes/publicRoutes';

AOS.init();

const MainPage =(props)=>{
  console.log(props)
        return ( 
            
<React.Fragment>
{/* {props.user === null ? */}
 <HeaderAd {...props}/>
        {/* : */}
 {/* props.user !== null ?  */}
        {/* <HeaderAd {...props}/> */}
        {/* : */}
       {/* '' */}
        {/* } */}
<Switch>
    <PublicRoute {...props} restricted={false} path='/home' component={() =><Home {...props}/>}/>
    <PublicRoute {...props} restricted={false}  path='/contact-us' component={() =><ContactComponent/>}/> 
    <PublicRoute {...props} restricted={false} path="/advenced-level" component={()=> <AdvencedLevel/>}/>
    <PublicRoute {...props} restricted={false} path="/advenced-diploma" component={()=> <Diploma/>}/>
    <PublicRoute {...props} restricted={false} path="/admission-for-advenced-level" component={()=> <AdmissionAdvancedLevel/>}/>
    <PublicRoute {...props} restricted={false} path="/admission-for-advenced-diploma" component={()=> <AdmissionAdvancedDiploma/>}/>
    <PublicRoute {...props} restricted={false} path="/mission-vision" component={()=><MissionVision />}/>
    <PublicRoute {...props} restricted={false} path="/administration" component={()=><Team/>}/>
    <PublicRoute {...props} restricted={false} path="/history" component={()=> <History/>}/>
    <PublicRoute {...props} restricted={false} path="/dashboard" component={()=> <Dashboard/>}/>
    <PrivateRoute {...props} path="/dashboard" component={()=> <Dashboard/>}/>
  
    <Redirect to='/home'/>
</Switch>
<Footer/>
</React.Fragment>
         );
    }

 
export default MainPage;