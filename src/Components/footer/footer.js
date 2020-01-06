import React from 'react';
import logo from 'C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/logo.png';
import "./footer.css";
const Footer = () => {
    return ( 
     <div>
        <div className="footer ">
      <div className="container">
        <div className="row pt-5">
          <div className="col-6">
            <ul className="list-unstyled">
              <li className=" font font-weight-bold">SJITC ADMISSIONOFFICE</li>
              <li className=" font font-weight-bold">Application form</li>
              <li className=" font ">Advanced Diploma & Diploma program</li>
            </ul>
          </div>
          <div className="col-2 " >
                  <img src={logo} alt="logo"   height="90"
                width="100"/>
            </div>
          <div className="col-4 ">
          <ul className="list-unstyled">
              <li className=" font ">Address: Kigali-Rwanda</li>  
              <li className=" font ">Tel No: 0788888888/0729998766</li> 
              <li className=" font ">Email: example@gmail</li> 
              <li className=" font ">Website: sjitc.ac.rw</li> 
           </ul>
         </div>
          
            </div>
         
      </div>
    </div>
     </div>
     );
}
 
export default Footer;