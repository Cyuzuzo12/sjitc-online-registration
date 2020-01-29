import React, { Component } from "react";
import StudentDetForm from "./studentDetForm";
import avatar from "../../../images/avatar.jpg";
class StudentDetails extends Component {
 
  render() {
    return (
      <div>
        <section>
          <div className="container ">
        
            <div className="row margin">
              <div className="col">
              
              <div className="bg-white p-4">
              <h6 className="font-weight-bold">Umulisa Clemence Details</h6>
                  <hr/>
                 <div className="row">
                 <div className="col-2 ">
                  <img src={avatar} alt=""/>
                  <div className="bg-light">
                    <i className="fa fa-print m-2"/>
                    <i className="fa fa-edit m-2"/>
                    <i className="fa fa-print m-2"/>
                  </div>
                  </div>
                  <div className="col-10">
                    <h4 className="font-weight-bold">About Me</h4>
                    <hr className="font-weight-bold bg-secondary" style={{width:'15%',
                    marginLeft:'1px',height:'5px'
                  
                  }}/>
                    <StudentDetForm/>
                    </div>
                
                 </div>
              </div>
              </div>
      </div>
           
          </div>
        </section>
      </div>
    );
  }
}

export default StudentDetails;
