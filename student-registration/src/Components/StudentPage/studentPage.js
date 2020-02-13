import React from "react";
import logo from '../../images/logo.png';
// import avatar from '../../images/avatar.jpg';
import UpdateProfie from "../help/updateProfile";
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
          <li className=" font ">Address: KN 2AVE,Kigali,Rwanda</li>  
              <li className=" font ">Tel No: (+250)782306593</li> 
              <li className=" font ">Email: sjitc2010@yahoo.fr</li> 
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
               
               <div className="row ">
               <div className="col-7 "> <h6 className="p-5">
                  <i className="fa fa-edit fa-lg" />
                  Student Details{" "}
                </h6></div>
               <div className="col-4 offset-1 p-3">
                  {/* <img src={avatar} alt="studPhoto"/> */}
                  <UpdateProfie/>
                </div>
               </div>
                  <div className="form-row form-group">
                    <div className="col">
                      <h6 className="font-weight-bold text-muted purple">First Name <em className="required">*</em></h6>
                      <p className="text-muted">Cyuzuzo</p>
                    </div>
                   
                    </div>
                    <div className="form-row form-group">
                    <div className="col">
                      <h6 className="font-weight-bold text-muted purple">Last Name <em className="required">*</em></h6>
                      <p className="text-muted">Nadine</p>
                    </div>
                  </div>
                  <div className="form-row form-group">
                    <div className="col">
                      {" "}
                      <h6 className="font-weight-bold text-muted purple">Date of Birth <em className="required">*</em></h6>
                      <p className="text-muted">09/11/2009</p>
                    </div>
                  </div>
                  <div className="form-row form-group">
                    <div className="col">
                      <h6 className="font-weight-bold text-muted purple">Gender <em className="required">*</em></h6>
                      <p className="text-muted">Female</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple">Father's Name <em className="required">*</em></h6>
                    <p className="text-muted">Smith John</p>
                  </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple">Mother'S Name <em className="required">*</em></h6>
                    <p className="text-muted">Smith John</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple">Guardian's Name <em className="required">*</em></h6>
                    <p className="text-muted">Smith John</p>
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
                    <h6 className="font-weight-bold text-muted purple">Address <em className="required">*</em></h6>
                    <p className="text-muted">Kigali/Gasabo</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple">Nationality <em className="required">*</em></h6>
                      <p className="text-muted">Rwanda</p>
                    </div>
                    </div>
                    <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple" >ID <em className="required">*</em></h6>
                      <p className="text-muted ">1234567890987654345</p>
                    </div>
                    </div>
                    <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple" >Insurance <em className="required">*</em></h6>
                      <p className="text-muted">rssb</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple" >Ubudehe <em className="required">*</em></h6>
                     <p className="text-muted">icyiciro 1</p>
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
                    <h6 className="font-weight-bold text-muted purple">Previous Institution </h6>
                     <p className="text-muted">College saint Andree</p>
                    </div>
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple">Department <em className="required">*</em> </h6>
                      <p className="text-muted">Cival Engineering</p>
                    </div>
                   
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple" >Year Admitted in <em className="required">*</em></h6>
                 <p className="text-muted">Year 2</p>
                  </div>
                   
                  </div>
                  <div class="form-row form-group">
                    <div class="col">
                    <h6 className="font-weight-bold text-muted purple" >Program <em className="required">*</em></h6>
                    <p className="text-muted">Full Time</p>
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
