import React, { Component } from "react";
import { Link } from "react-router-dom";
class ShortCourse extends Component {
  state = {};
  program = () => {
    return <Link to="/program"></Link>;
    // alert("submitted")
  };
  render() {
    return (
      <div>
        <section className="advenced-level">
          <div className="container">
            <h5 className="text-center text-white p-5">
              REGISTRATION FORM FOR ADVENCED LEVEL{" "}
            </h5>

            <div className="row justify-content-center">
              <div className="col-md-7 col-sm-12 border bg-light loginForm">
                <form>
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">NAMES </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">SURNAMES </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-6 offset-3">
                      {" "}
                      <label for="name ">DATE OF BIRTH</label>
                      <input type="date" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-2">
                      <label for="name ">GENDER</label>
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
                    <label for="name ">FATHER'S NAME & CONTACT</label>
                    <input type="text" className="form-control  " id="name" />
                  </div>
                  <div className="form-group">
                    <label for="name ">MOTHER'S NAME & CONTACT</label>
                    <input type="text" className="form-control  " id="name" />
                  </div>
                  <div className="form-group">
                    <label for="name ">GUARDIAN'S NAME & CONTACT</label>
                    <input type="text" className="form-control  " id="name" />
                  </div>
                  <div className="form-group">
                    <label for="name ">RESIDENCE DISTRICT</label>
                    <input type="text" className="form-control  " id="name" />
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">NATIONALITY </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">ID </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">INSURENCE </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-7 offset-2">
                      {" "}
                      <label for="name ">UBUDEHE LEVEL</label>
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
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">ORIGINE PROVINCE </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">RESIDENCE PROVINCE</label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">ORIGINE DISTRICT </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">RESIDENCE DISTRICT</label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div class="form-row ">
                    <div class="col">
                      <label for="name ">ORIGINE CELL </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">RESIDENCE CELL</label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">ORIGINE VILLAGE </label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                    <div class="col">
                      <label for="name ">RESIDENCE VILLAGE</label>
                      <input type="text" className="form-control  " id="name" />
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col">
                      <h5>DOCUMENTS REQUIRED TO EVERY STUDENT</h5>
                      <p>
                        <em>
                          (passport photo, ID card or Passport, Advenced Level
                          result slip)
                        </em>
                      </p>
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
                      <label for="name ">OPTION TO BE ATTEND</label>
                      <select class="form-control">
                        <option selected>Choose...</option>
                        <option>Masonery</option>
                        <option>Computer Application</option>
                        <option>surveying</option>
                        <option>Road Contruction</option>
                      </select>
                    </div>
                  </div>
                  <h6 className="text-center font-weight-bold p-2">
                    PARTICULAR INFORMATION
                  </h6>
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
                  <div class="form-row">
                    <div class="col-md-7">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="specify sponsor name"
                        id="name"
                      />
                    </div>
                  </div>
                  <div class="form-row ">
                    <div class="col-md-7">
                      <h6>
                        NAME & CONTACT OF PARENT/GUARDIAN'S WHO WILL PAY FOR YOU{" "}
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
                  <div class="form-row p-5">
                    <div class="col">
                      <button
                        type="submit"
                        className="bg-warning form-control font-weight-bold  "
                      >
                        SUBMIT
                      </button>
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
}

export default ShortCourse;
