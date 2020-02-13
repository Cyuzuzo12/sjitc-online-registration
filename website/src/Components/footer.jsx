import React from 'react';
import {CURRENT_YEAR} from "./help";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Footer = () => {
    return ( 
     <div>
        <div className="footer-frame">
    </div>
        <div className="footer ">
      <div className="container">
        <div className="row justify-content-start pt-5">
          <div className="col-md-3 offset-1">
            <h4 className=" font1 text-white">SJITC</h4>
            <ul className="list-unstyled">
              <Link to="/history"><li className=" font text-white">About US</li></Link>
              <Link to="/advenced-diploma"><li className=" font text-white">Academics</li></Link>
              <Link to="/admission-for-advenced-diploma"><li className=" font text-white">Admission</li></Link>
            </ul>
          </div>
          <div className="col-md-2 "><h4 className=" font1 text-white">SUPPORT</h4>
          <ul className="list-unstyled">
             <Link to="/contact-us"> <li className=" font text-white">Contact Us</li></Link>
              
            </ul>
            </div>
          <div className="col-md-6 "><h4 className=" font1 text-white">KEEP IN TOUCH</h4>
          <p >
                <a
                  href="https://m.facebook.com/Saint-Joseph-Integrated-Technical-College-SJITC-Nyamirambo-642601879173487/"
                  className="text-white  m-3"
                >
                  <i className=" fa fa-facebook fa-lg  " />
                </a>{" "}
                <a href="https://twitter.com" className="text-white  m-3">
                  {" "}
                  <i className="fa fa-twitter fa-lg  " />
                </a>
                <a href="https://www.instagram.com" className="text-white  m-3">
                  <i className="fa fa-instagram fa-lg " />
                </a>
              </p>
         </div>
          
            </div>
            <div className="row justify-content-center">
          <div className="col  ">
            
          <hr className="bg-white " />
          <p className="text-white text-center">Copyright Reserved by Saint Joseph Integrated Technical College ({CURRENT_YEAR})</p>
      </div>
           
          </div>
      </div>
    </div>
     </div>
     );
}
 
export default Footer;