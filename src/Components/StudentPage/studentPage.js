import React, { Component } from "react";
import { Col,Button ,Row} from 'reactstrap';
import FormField from "../formFild";
import logo from '../../images/logo.png';
import Address from "../help/address";
import FilesUpload from "../help/fileUpload";
import ImageUpload from "../help/uploadImage";
import Country from "../help/country";

const StudentPage =(props)=>{
 
    return (
      <div>
        {/* <SideNav /> */}
        <section>
        <div className="container ">
          <div className="row justify-content-center ">
              <div className="col-md-10  header-div m-2 ">
              <div className="row pt-5">
          <div className="col-6">
            <ul className="list-unstyled">
              <li className=" font font-weight-bold">SJITC ADMISSION OFFICE</li>
              <li className=" font font-weight-bold">Application form</li>
              <li className=" font ">Advanced Diploma & Diploma</li>
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
            <div className="row justify-content-center ">
              <div className="col-md-10 col-sm-12 reg-form">
                <form>
                <div id="stud-name" style={{display:props.first ? 'block' : 'none'}}>
                <h6 className="text-center p-5">
                  <i className="fa fa-edit fa-lg" />
                  Student Details{" "}
                </h6>
                  <div class="form-row form-group">
                    <div class="col">
                      <h6 className="font-weight-bold">First Name <em className="required">*</em></h6>
                      <p>Cyuzuzo</p>
                    </div>
                    </div>
                    <div class="form-row form-group">
                    <div class="col">
                      <h6 className="font-weight-bold">Last Name <em className="required">*</em></h6>
                      <p>Nadine</p>
                    </div>
                  </div>
                  <div className="form-row form-group">
                    <div className="col">
                      {" "}
                      <h6 className="font-weight-bold">Date of Birth <em className="required">*</em></h6>
                      <p>09/11/2009</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                      <h6 className="font-weight-bold">Gender <em className="required">*</em></h6>
                      <p >Female</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold">Father's Name <em className="required">*</em></h6>
                    <p>Smith John</p>
                  </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold">Mother'S Name <em className="required">*</em></h6>
                    <p>Smith John</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold">Guardian's Name <em className="required">*</em></h6>
                    <p>Smith John</p>
                    </div>
                  </div>
                 
                  </div>   
<div style={{display:props.second ? 'block' : 'none'}}>
  
<h6 className="text-center p-5">
                  <i className="fa fa-home fa-lg" />
                  Residence place{" "}
                </h6>
                <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold">Address <em className="required">*</em></h6>
                    <p>Kigali/Gasabo</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold">Nationality <em className="required">*</em></h6>
                      <p>Rwanda</p>
                    </div>
                    </div>
                    <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold" >ID <em className="required">*</em></h6>
                      <p>1234567890987654345</p>
                    </div>
                    </div>
                    <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold" >Insurance <em className="required">*</em></h6>
                      <p>rssb</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold" >Ubudehe <em className="required">*</em></h6>
                     <p>icyiciro 1</p>
                    </div>
                  </div>
                
</div>
{/* ======================================academics info=============================== */}
<div style={{display:props.third ? 'block' : 'none'}}>
  
<h6 className="text-center p-5">
                  <i className="fa fa-home fa-lg" />
                  Academic options
                </h6>
               
                <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold">Previous Institution </h6>
                     <p>College saint Andree</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold">Department <em className="required">*</em> </h6>
                      <p>Cival Engineering</p>
                    </div>
                   
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold" >Year Admitted in <em className="required">*</em></h6>
                 <p>Year 2</p>
                  </div>
                   
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold" >Program <em className="required">*</em></h6>
                    <p>Full Time</p>
                    </div>
                  </div>
</div>

                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  
}

export default StudentPage;
