import React, { Component } from "react";
import { Col,Button ,Row} from 'reactstrap';
import FormField from "../formFild";
import logo from '../../images/logo.png';
import Address from "../help/address";
import FilesUpload from "../help/fileUpload";
import ImageUpload from "../help/uploadImage";

class AdvancedDiplomaForm extends Component {
  state = {
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth:false,
    dataError:"",
    formdata:{
      firstname: {
        element: "input",
        value: "",
        config: {
          className:"form-control",
          type: "text",
          name: "firstname"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
    },
    lastname: {
      element: "input",
      value: "",
      config: {
        className:"form-control",
        type: "text",
        name: "lastname"
      },
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      validationMessage: ""
  },
  dob: {
    element: "input",
    value: "",
    config: {
      className:"form-control",
      type: "date",
      name: "dob"
    },
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    validationMessage: ""
},
female: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "radio",
    name: "female"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
male: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "radio",
    name: "male"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
father: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "father"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
mother: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "mother"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
guardian: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "guardian"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
id: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "id"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
nationality: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "nationality"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
insurance: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "insurance"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
FARGpinCode: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "FARGpinCode"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
sponsor: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    placeHolder:"Specify sponsor contact",
    type: "text",
    name: "sponsor"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
ngo: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "ngo"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
gov: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "gov"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
specialNeed: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "specialNeed"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
agree: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "agree"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
physicalDisability: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "physicalDisability"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
parent: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "parent"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
otherPerson: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "otherPerson"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
partTime: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "radio",
    name: "partTime"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
fullTime: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "radio",
    name: "fullTime"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
generalCase: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "generalCase"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
department: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    placeHolder:"Specify sponsor contact",
    type: "text",
    name: "department"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
previousSchool: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "previousSchool"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
}
  }
  };
  onClickFirst =()=>{
this.setState({
  first:!this.state.first,
  second:!this.state.second
})
  }
  onClickSecond =()=>{
    this.setState({
      third:!this.state.third,
      second:!this.state.second
    })
      }
      onClickThird =()=>{
        this.setState({
          third:!this.state.third,
          fourth:!this.state.fourth
        })
          }
          onClickFourth =()=>{
            this.setState({
              fourth:!this.state.fourth,
              fifth:!this.state.fifth
            })
              }
  updateForm = element => {
    const newFormdata = {
      ...this.state.formdata
  }
  const newElement = {
      ...newFormdata[element.id]
  }
  newElement.value = element.event.target.value;
  if(element.blur){
      let validData = this.validate(newElement);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];   
  }
  newElement.touched = element.blur;
  newFormdata[element.id] = newElement;
  
  this.setState({
      formdata:newFormdata
  })
  };
  validate = (element) => {
    let error = [true,''];

    // if(element.validation.email){
    //     const valid = /\S+@\S+\.\S+/.test(element.value);
    //     const message = `${!valid ? 'Must be a valid email':''}`;
    //     error = !valid ? [valid,message] : error
    // }

    // if(element.validation.password){
    //     const valid = element.value.length >= 5;
    //     const message = `${!valid ? 'Must be greater than 5':''}`;
    //     error = !valid ? [valid,message] : error
    // }

    if(element.validation.required){
        const valid = element.value.trim() !=='';
        const message = `${!valid ? 'This field is required':''}`;
        error = !valid ? [valid,message] : error
    }

    return error;
}
submitForm = () => {

}
  submitButton = () => (
    this.state.loading ? 
        'loading...'
    :
    <div>
       
        <button type="submit" className="bg-primary form-control text-white"> Send </button>
    </div>
)

storeFilename = (filename) => {
  this.updateForm({id:'image'},filename)
}

showError = () => (
  this.state.registerError !== '' ? 
      <div className="error">{this.state.registerError}</div>
  : ''
)
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
              <div className="col-md-8 col-sm-12 reg-form">
                <form>
                <div id="stud-name" style={{display:this.state.first ? 'block' : 'none'}}>
                <h6 className="text-center p-5">
                  <i className="fa fa-edit fa-lg" />
                  Registration details{" "}
                </h6>
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">First Name </label>
                      <FormField
                       id={"firstname"}
                       formdata={this.state.formdata.firstname}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                    <div class="col">
                      <label for="name ">Last Name </label>
                      <FormField
                       id={"lastname"}
                       formdata={this.state.formdata.lastname}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-6 offset-3">
                      {" "}
                      <label for="name ">Date of Birth</label>
                      <FormField
                       id={"dob"}
                       formdata={this.state.formdata.dob}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-2">
                      <label for="name ">Gender</label>
                    </div>
                    <div class="col-md-10">
                      <div className="form-check ">
                      <FormField
                       id={"male"}
                       formdata={this.state.formdata.male}
                       change={element => this.updateForm(element)}
                      />
                        <label className="form-check-label" for="male">
                          Male
                        </label>
                      </div>

                      <div className="form-check ">
                      <FormField
                       id={"female"}
                       formdata={this.state.formdata.female}
                       change={element => this.updateForm(element)}
                      />
                        <label className="form-check-label" for="female">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="name ">Father's name</label>
                    <FormField
                       id={"father"}
                       formdata={this.state.formdata.father}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div className="form-group">
                    <label for="name ">Mother'S Name </label>
                    <FormField
                       id={"mother"}
                       formdata={this.state.formdata.mother}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div className="form-group">
                    <label for="name ">Guardian's Name </label>
                    <FormField
                       id={"guardian"}
                       formdata={this.state.formdata.guardian}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <Row className="form-group p-5">
                    
      <Col md={{ size: 5,offset: 8 }}>
                  <Button onClick={this.onClickFirst} color="primary">
                   <span><i className="fa fa-arrow-right fa-lg m-2"/>Continue</span>
                  </Button>
       </Col>
      </Row>
                  </div>   
<div id="residence" style={{display:this.state.second ? 'block' : 'none'}}>
  
<h6 className="text-center p-5">
                  <i className="fa fa-home fa-lg" />
                  Residence place{" "}
                </h6>
                  <div className="form-group">
                    
                    <Address />
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">Nationality</label>
                      <FormField
                       id={"nationality"}
                       formdata={this.state.formdata.nationality}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                    <div class="col">
                      <label for="name ">ID </label>
                      <FormField
                       id={"id"}
                       formdata={this.state.formdata.id}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                    <div class="col">
                      <label for="name ">Insurance </label>
                      <FormField
                       id={"insurance"}
                       formdata={this.state.formdata.guardian}
                       change={element => this.updateForm(element)}
                      />
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
                  <Row className="form-group p-5">
                  <Col md={{ size: 3,offset: 0 }}>
                  <Button onClick={this.onClickFirst} color="primary">
                  <span><i className="fa fa-arrow-left fa-lg m-2"/>Back</span>
                  </Button>
       </Col>
      <Col md={{ size: 3,offset: 5 }}>
                  <Button onClick={this.onClickSecond} color="primary">
                   <span><i className="fa fa-arrow-right fa-lg m-2"/>Continue</span>
                  </Button>
                  
       </Col>
      </Row>
</div>
{/* ======================================academics info=============================== */}
<div id="residence" style={{display:this.state.third ? 'block' : 'none'}}>
  
<h6 className="text-center p-5">
                  <i className="fa fa-home fa-lg" />
                  Choose academic options
                </h6>
                  <div className="form-group">
                    
                    <Address />
                  </div>
                  <div className="form-group">
                  <div class="col">
                      <label for="name ">Previous Institution </label>
                      <FormField
                       id={"previousSchool"}
                       formdata={this.state.formdata.previousSchool}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <label for="name ">Department </label>
                      <FormField
                       id={"department"}
                       formdata={this.state.formdata.department}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                   
                  </div>
                  <div class="form-row mt-3">
                  <div className="col-12">
                  <label for="name ">Year Admitted in</label>
                  </div>
                    <div class="col">
                    
                    <div className="form-check ">
                      <FormField
                       id={"partTime"}
                       formdata={this.state.formdata.partTime}
                       change={element => this.updateForm(element)}
                      />
                        <label className="form-check-label" >
                          Year1
                        </label>
                      </div>

                    </div>
                    <div class="col">
                      
                      <div className="form-check ">
                      <FormField
                       id={"fullTime"}
                       formdata={this.state.formdata.fullTime}
                       change={element => this.updateForm(element)}
                      />
                        <label className="form-check-label" >
                          Year2
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      
                      <div className="form-check ">
                      <FormField
                       id={"fullTime"}
                       formdata={this.state.formdata.fullTime}
                       change={element => this.updateForm(element)}
                      />
                        <label className="form-check-label" >
                          Year3
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      
                      <div className="form-check ">
                      <FormField
                       id={"fullTime"}
                       formdata={this.state.formdata.fullTime}
                       change={element => this.updateForm(element)}
                      />
                        <label className="form-check-label" >
                          Year4
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      
                      <div className="form-check ">
                      <FormField
                       id={"fullTime"}
                       formdata={this.state.formdata.fullTime}
                       change={element => this.updateForm(element)}
                      />
                        <label className="form-check-label" >
                          Short Courses
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-row mt-3">
                    <div class="col-md-2">
                      <label for="name ">Program</label>
                    </div>
                    <div class="col-md-10">
                      <div className="form-check ">
                      <FormField
                       id={"partTime"}
                       formdata={this.state.formdata.partTime}
                       change={element => this.updateForm(element)}
                      />
                        <label className="form-check-label" >
                          Part time
                        </label>
                      </div>

                      <div className="form-check ">
                      <FormField
                       id={"fullTime"}
                       formdata={this.state.formdata.fullTime}
                       change={element => this.updateForm(element)}
                      />
                        <label className="form-check-label" >
                          Full time
                        </label>
                      </div>
                    </div>
                  </div>
                  <Row className="form-group p-5">
                  <Col md={{ size: 3,offset: 0 }}>
                  <Button onClick={this.onClickSecond} color="primary">
                  <span><i className="fa fa-arrow-left fa-lg m-2"/>Back</span>
                  </Button>
       </Col>
      <Col md={{ size: 3,offset: 5 }}>
                  <Button onClick={this.onClickThird} color="primary">
                   <span><i className="fa fa-arrow-right fa-lg m-2"/>Continue</span>
                  </Button>
                  
       </Col>
      </Row>
</div>
{/* =========================================document================== */}
               <div id="documents" style={{display:this.state.fourth ? 'block' : 'none'}}>
               <h6 className="text-center p-5">
                  <i className="fa fa-file-text fa-lg" />
                  Required Documents{" "}
                </h6>
               <div className="row">
                    <div className="col">
                      <h6 className="text-center pt-3">
                        Document to be uploaded by each Candidate
                      </h6>
                      <p className="purple text-center">
                        <em className="purple text-center">
                          ("A" Level certificate, Passport photo, ID card or Passport for foreigners, Progressive Report from S4 to S6, Bank Slip of registration)
                        </em>
                      </p>
                      <hr/>
                    </div>
                  </div>
                 
                  <div class="form-row p-3">
                    <div class="col">
                      
                      <ImageUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    </div>
                   
                  </div>
                  <div class="form-row p-2">
                    <div class="col">
                    <h6 className="purple">A Level certificate</h6>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    </div>
                    <div class="col">
                    <h6 className="purple">ID card or Passport</h6>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    </div>
                  </div>
                  <div class="form-row p-2">
                  <div class="col">
                    <h6 className="purple">Progressive Reports</h6>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    </div>
                    <div class="col">
                    <h6 className="purple">Bank Slip for registration payment</h6>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    </div>
                   
                  </div>
                  <div className="form-row">
                    <div className="col-7 offset-2">
                      {" "}
                      <h6 className="purple">Option to be Admitted</h6>
                      <select class="form-control">
                        <option selected>Choose...</option>
                        <option>Masonery</option>
                        <option>Computer Application</option>
                        <option>surveying</option>
                        <option>Road Contruction</option>
                      </select>
                    </div>
                  </div>
                  <Row className="form-group p-5">
                  <Col md={{ size: 3,offset: 0 }}>
                  <Button onClick={this.onClickThird} color="primary">
                  <span><i className="fa fa-arrow-left fa-lg m-2"/>Back</span>
                  </Button>
       </Col>
      <Col md={{ size: 3,offset: 5 }}>
                  <Button onClick={this.onClickFourth} color="primary">
                   <span><i className="fa fa-arrow-right fa-lg m-2"/>Continue</span>
                  </Button>
                  
       </Col>
      </Row>
               </div>


               {/* =======================================other information=========================== */}
                 <div id="other-info" style={{display:this.state.fifth ? 'block' : 'none'}}>
                 <h6 className="text-center p-5">
                  <i className="fa fa-info fa-lg" />
                    PARTICULAR INFORMATION
                  </h6>
                  <hr/>
                  <h6 className="font-weight-bold p-2">HEALTH STATE:</h6>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox1">
                      {" "}
                      General Case
                    </label>
                    <FormField
                       id={"generalCase"}
                       formdata={this.state.formdata.generalCase}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox2">
                      Special Need
                    </label>
                    <FormField
                       id={"specialNeed"}
                       formdata={this.state.formdata.specialNeed}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox3">
                      Physical Disability
                    </label>
                    <FormField
                       id={"physicalDisability"}
                       formdata={this.state.formdata.physicalDisability}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <h6 className="font-weight-bold p-2">
                    SCHOOL FEES : Sponsor:
                  </h6>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox1">
                      parents
                    </label>
                    <FormField
                       id={"parent"}
                       formdata={this.state.formdata.parent}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox2">
                      Another person
                    </label>
                    <FormField
                       id={"otherPerson"}
                       formdata={this.state.formdata.otherPerson}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox3">
                      NGO
                    </label>
                    <FormField
                       id={"ngo"}
                       formdata={this.state.formdata.ngo}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label" for="inlineCheckbox3">
                      GOV FUNDS
                    </label>
                    <FormField
                       id={"gov"}
                       formdata={this.state.formdata.gov}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div class="form-row p-2">
                    <div class="col-md-7">
                    <FormField
                       id={"sponsor"}
                       formdata={this.state.formdata.sponsor}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                  </div>
                  <div class="form-row p-2">
                    <div class="col-md-7">
                      <h6>
                        Pin code for FARG STUDENTS
                      </h6>
                      <FormField
                       id={"FARGpinCode"}
                       formdata={this.state.formdata.FARGpinCode}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                  </div>
                  <h6 className="pt-5">
                    Candidate, agree that information given are true and correct
                  </h6>
                  <div class="form-check form-check-inline">
                  <FormField
                       id={"agree"}
                       formdata={this.state.formdata.agree}
                       change={element => this.updateForm(element)}
                      />
                    <label class="form-check-label" >
                      I agree
                    </label>
                  </div>
                  <Row className="form-group p-5">
                  <Col md={{ size: 3,offset: 0 }}>
                  <Button onClick={this.onClickFourth} color="primary">
                  <span><i className="fa fa-arrow-left fa-lg m-2"/>Back</span>
                  </Button>
       </Col>
      <Col md={{ size: 3,offset: 5 }}>
               {this.submitButton()}
       </Col>
      </Row>
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

export default AdvancedDiplomaForm;
