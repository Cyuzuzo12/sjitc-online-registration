import React, { Component } from "react";
import AdminFormTemplate from "./AdminFormTemplate";
class AdminForm extends Component {
 
  render() {
    return (
      <div>
        <section>
          <div className="container ">
        
            <div className="row margin">
              <div className="col">
              
              <div className="bg-white p-4">
              <h6 className="font-weight-bold">Add Student Form</h6>
                  <hr/>
                 <div className="row">
                
                  <div className="col-10">
                   
                    <AdminFormTemplate/>
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

export default AdminForm;
