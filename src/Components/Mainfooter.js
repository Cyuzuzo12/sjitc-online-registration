import React from 'react';
import { Link } from "react-router-dom";
import {  Col, Row } from "reactstrap";
import {CURRENT_YEAR} from "./help";
const MainFooter = () => {
    return ( 
     <div className="main-footer">
        
      <div className="container">
       
            <div className="row justify-content-center">
          <div className="col  ">
          
          <p className="text-center">Copyright Reserved by Saint Joseph Integrated Technical College ({CURRENT_YEAR})</p>
     
           
          </div>
      </div>
    </div>
     </div>
     );
}
 
export default MainFooter;