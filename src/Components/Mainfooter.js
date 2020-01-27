import React from 'react';
import {CURRENT_YEAR} from "./help";
const MainFooter = () => {
    return ( 
     <div className="main-footer">
        
      <div className="container">
       
            <div className="row justify-content-center">
          <div className="col  ">
          
          <p className="text-center">©sjitc({CURRENT_YEAR})|Powered by <a href="https://www.techenfold.com/" className="text-dark">Techenfold ltd</a></p>
     
           
          </div>
      </div>
    </div>
     </div>
     );
}
 
export default MainFooter;