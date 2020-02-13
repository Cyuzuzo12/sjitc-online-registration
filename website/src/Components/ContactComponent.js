import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
// import call from "../images/call.gif";

class Contact extends Component {
 
  render() {
    return (
     <section className="bg-white">
 <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          {/* <div className="col-12 col-sm-6 offset-sm-1 border-right contact">
            {/* <img src={call} alt="call" height="200" width="200"/> */}
          {/* </div> */}
          <div className="col-12 col-sm-4 offset-sm-1   ">
            <h5>Our Address</h5>
            <address>
            KN 2AVE,Kigali,Rwanda
            
              <br />
              <i className="fa fa-phone" />: (+250)782306593
              <br />
              <i className="fa fa-envelope" />:{" "}
              <a href="mailto:sjitc2010@yahoo.fr">sjitc2010@yahoo.fr</a>
            </address>
          </div>
          
        </div>
        
      </div>
     </section>
    );
  }

}
export default Contact;

