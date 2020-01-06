import React, { Component } from "react";
import {  FormGroup, Label, Input,Col,Form,Button ,Row} from 'reactstrap';
import logo from 'C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/logo.png';

import {Link } from 'react-router-dom';

class AdvancedLevelForm extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <SideNav /> */}
        <section>
          <div className="container ">
          <div className="row justify-content-center ">
              <div className="col-md-8 col-sm-12 header-div m-2 ">
              <div className="row pt-5">
          <div className="col-6">
            <ul className="list-unstyled">
              <li className=" font font-weight-bold">SJITC ADMISSIONOFFICE</li>
              <li className=" font font-weight-bold">Application form</li>
              <li className=" font ">Advanced Level(A2)</li>
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
              <div className="col-md-8 col-sm-12 reg-form">
                <h5 className="text-center p-5">
                  <i className="fa fa-edit fa-lg" />
                  Registration details{" "}
                </h5>

                
                <form>
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">Names </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">Surnames </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-6 offset-3">
                      {" "}
                      <label for="name ">Date of Birth</label>
                      <input type="date" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-2">
                      <label for="name ">Gender</label>
                    </div>
                    <div class="col-md-10">
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="male"
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Male
                        </label>
                      </div>

                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="name ">Father's name & Contact</label>
                    <input type="text" className="form-control  " id="name" />
                  </div>
                  <div className="form-group">
                    <label for="name ">Mother'S Name & Contact</label>
                    <input type="text" className="form-control  " id="name" />
                  </div>
                  <div className="form-group">
                    <label for="name ">Guardian's Name & Contact</label>
                    <input type="text" className="form-control  " id="name" />
                  </div>
                  <div className="form-group">
                    <label for="name ">Residence District</label>
                    <input type="text" className="form-control  " id="name" />
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">Nationality</label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">ID </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">Insurance </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-7 offset-2">
                      {" "}
                      <label for="name ">Ubudehe</label>
                      <select class="form-control">
                        <option selected>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <h5 className="text-center pt-3">
                        Document to be uploaded by each Candidate
                      </h5>
                      <p className="purple text-center">
                        <em className="purple text-center">
                          (passport photo, ID card or Passport, Ordinary Level
                          result slip)
                        </em>
                      </p>
                      <hr/>
                    </div>
                  </div>
                 
                  <div class="form-row p-3">
                    <div class="col">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="validatedCustomFile"
                          required
                        />
                        <label
                          class="custom-file-label"
                          for="validatedCustomFile"
                        >
                          Choose file...
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="validatedCustomFile"
                          required
                        />
                        <label
                          class="custom-file-label"
                          for="validatedCustomFile"
                        >
                          Choose file...
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-row p-2">
                    <div class="col">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="validatedCustomFile"
                          required
                        />
                        <label
                          class="custom-file-label"
                          for="validatedCustomFile"
                        >
                          Choose file...
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="validatedCustomFile"
                          required
                        />
                        <label
                          class="custom-file-label"
                          for="validatedCustomFile"
                        >
                          Choose file...
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-7 offset-2">
                      {" "}
                      <label for="name ">Option to be Admitted</label>
                      <select class="form-control">
                        <option selected>Choose...</option>
                        <option>Masonery</option>
                        <option>Computer Application</option>
                        <option>surveying</option>
                        <option>Road Contruction</option>
                      </select>
                    </div>
                  </div>
                  <h6 className="text-center font-weight-bold pt-3">
                    PARTICULAR INFORMATION
                  </h6>
                  <hr/>
                  <h6 className="font-weight-bold p-2">HEALTH STATE:</h6>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox1">
                      {" "}
                      General Case
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox2">
                      Special Need
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox3">
                      Physical Disability
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                  </div>
                  <h6 className="font-weight-bold p-2">
                    SCHOOL FEES : Sponsor:
                  </h6>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox1">
                      parents
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox2">
                      Another person
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox3">
                      NGO
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox3">
                      GOV FUNDS
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                  </div>
                  <div class="form-row p-2">
                    <div class="col-md-7">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="specify sponsor name"
                        id="name"
                      />
                    </div>
                  </div>
                  <div class="form-row p-2">
                    <div class="col-md-7">
                      <h6>
                        Name & Contact OF Parent/Guaridian's who will pay for
                        you{" "}
                      </h6>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                  </div>
                  <h6 className="pt-5">
                    Candidate, agree that information given are true and correct
                  </h6>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                    <label class="form-check-label" for="inlineCheckbox3">
                      I agree
                    </label>
                  </div>
                  <Row className="form-group">
      <Col md={{ size: 4,offset: 8 }}>
                  <Link to="/student-page">
                  <Button type="submit" color="primary">
                   Submit
                  </Button>
                  </Link>
                  
       </Col>
      </Row>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AdvancedLevelForm;
