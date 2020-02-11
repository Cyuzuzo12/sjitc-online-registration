import React, { Component } from "react";
import { Col,Button ,Row} from 'reactstrap';
import FormField from "../formFild";
import logo from '../../images/logo.png';
import Address from "../help/address";
import FilesUpload from "../help/fileUpload";
import ImageUpload from "../help/uploadImage";
import Country from "../help/country";
import {diplomaReg} from "../DAO/UserFunctions";
// import {diplomaDep} from "../help/data";
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
          required: true,
          name:true
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
        required: true,
        name:true
      },
      valid: false,
      touched: false,
      validationMessage: ""
  },
  bankslip: {
    element: "input",
    value: "",
    config: {
      className:"form-control",
      placeholder:"enter bank slip number",
      type: "text",
      name: "bankslip"
    },
    validation: {
      required: true,
      bankslip:true
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
department: {
  element: "select",
  value: "",
  config: {
    className:"form-control",
    options:[  { id: 1, name:'High Way' },
        { id: 2, name:'Building Contruction' },
        { id: 3, name: 'Land Surveying' },
        { id: 4, name: 'Information Technology' }
  ],
    // type: "",
    name: "department"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
ubudehe: {
  element: "select",
  value: "",
  config: {
    className:"form-control",
    options:[  { id: 1, name:'icyiciro 1' },
        { id: 2, name:'icyiciro 2' },
        { id: 3, name:'icyiciro 3' },
        { id: 4, name:'icyiciro 4' },
        { id: 5, name:'icyiciro 5' },
  ],
    // type: "",
    name: "ubudehe"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
gender: {
  element: "select",
  value: "",
  config: {
    className:"form-control",
    options:[ { id: 1, name: 'Female' },
    { id:2, name: 'Male' }
  ],
    // type: "",
    name: "gender"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
completionYear: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "completion"
  },
  validation: {
    name:true
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
    name:true
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
    name:true
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
    name:true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
nationalID: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "id"
  },
  validation: {
    required: true,
    id:true
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
program: {
  element: "select",
  value: "",
  config: {
    className:"form-control",
    options:[ { id: 1, name: 'Full Time' },
    { id: 2, name: 'Part Time' },
  ],
    // type: "",
    name: "program"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
yearAdmittedIn: {
  element: "select",
  value: "",
  config: {
    className:"form-control",
    options:[ { id: 1, name: 'Year1' },
    { id: 2, name: 'Year2' },
    { id: 3, name: 'Year3' },
    { id: 4, name: 'Year4' },
    { id: 5, name: 'Short Courses' },
  ],
    // type: "",
    name: "yearAdmittedIn"
  },
  validation: {
    required: true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
healthState: {
  element: "select",
  value: "",
  config: {
    className:"form-control",
    options:[ { id: 1, name: 'General Case' },
    { id: 2, name: 'Physical Disability' },
    { id: 3, name: 'Special Need' }
  ],
    // type: "",
    name: "healthState"
  },
  touched: false
},
schoolFeesSponsor: {
  element: "select",
  value: "",
  config: {
    className:"form-control",
    options:[ { id: 1, name: 'Parents' },
    { id: 2, name: 'GOV Funds' },
    { id: 3, name: 'NGO' },
    { id: 4, name: 'FARG' },
    { id: 5, name: 'Other' },
  ],
    // type: "",
    name: "schoolFeesSponsor"
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
    placeholder:"Please Enter Sponsor Contacts",
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

agree: {
  element: "input",
  value: "",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "agree"
  },
  validation: {
    agree:true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
subject: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "subject"
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
}, 
image:{
  element:'image',
  value:'',
  valid:true
},
resultSlip:{
  element:'image',
  value:'',
  valid:true
},
report1:{
  element:'image',
  value:'',
  valid:true
},
report2:{
  element:'image',
  value:'',
  valid:true
},
report3:{
  element:'image',
  value:'',
  valid:true
},
id:{
  element:'image',
  value:'',
  valid:true
},
address:{
  element:'address',
  value:'',
  valid:true
},
nationality:{
  element:'nationality',
  value:'',
  valid:true
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
    if(element.validation.id){
        const valid = !isNaN(element.value)&& element.value.length >= 16;
        const message = `${!valid ? 'must be 16 digits or greater   ':''}`;
        error = !valid ? [valid,message] : error
    }
    if(element.validation.bankslip){
      const valid = !isNaN(element.value)&& element.value.length >3;
      const message = `${!valid ? 'must be greater than 3  ':''}`;
      error = !valid ? [valid,message] : error
  }
  if(element.validation.agree){
    const valid = element.value.trim() !=='';
    const message = `${!valid ? 'To Confirm your Registration request please agree terms and conditions':''}`;
    error = !valid ? [valid,message] : error
}
if(element.validation.name){
        const valid = element.value.length >= 3;
        const message = `${!valid ? 'must be atleast 3 letters':''}`;
        error = !valid ? [valid,message] : error
    }
    if(element.validation.required){
        const valid = element.value.trim() !=='';
        const message = `${!valid ? 'this field is required *':''}`;
        error = !valid ? [valid,message] : error
    }

    return error;
}
submitForm = (event,type) => {
  event.preventDefault();

  if(type !== null){

      let dataToSubmit = {};
      let formIsValid = true;

      for(let key in this.state.formdata){
          dataToSubmit[key] = this.state.formdata[key].value
      }
      for(let key in this.state.formdata){
          formIsValid = this.state.formdata[key].valid && formIsValid;
      }
     
      if(formIsValid){
        this.setState({
            loading:true,
            registerError:''
        })
        
        diplomaReg(dataToSubmit).then(res => {
          if (res) {
            this.props.history.push('/&nc-student&nc-registration');
          }
        }).catch( error =>{
          this.setState({
              loading:false,
              registerError: error.message
          })
      })
     
    }
  }


}
  submitButton = () => (
    this.state.loading ? 
        'loading...'
    :
    <div>
       
        <button onClick={(event)=>this.submitForm(event,true)} className="bg-primary form-control text-white"> Send </button>
    </div>
)
storeAddress = (address) => {
  this.updateForm({id:'address'},address)
} 
storeNationality = (nationality) => {
  this.updateForm({id:'nationality'},nationality)
} 
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
                <form onSubmit={(event)=>this.submitForm(event,null)}>
                <div id="stud-name" style={{display:this.state.first ? 'block' : 'none'}}>
                <h6 className="text-center p-5">
                  <i className="fa fa-edit fa-lg" />
                  Registration details{" "}
                </h6>
                  <div className="form-row">
                    <div className="col">
                      <label >First Name </label>
                      <FormField
                       id={"firstname"}
                       formdata={this.state.formdata.firstname}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                    <div className="col">
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
                  <div className="form-row">
                    <div className="col-md-2">
                      <label for="name ">Gender</label>
                    </div>
                    <div className="col-md-10">
                   <FormField
                   id={"gender"}
                   formdata={this.state.formdata.gender}
                   change={element => this.updateForm(element)}
                   />
                    
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
                <div className="form-row">
                    <div className="col">
                  <div className="form-group">
                    
                    <Address 
                    address={ (address)=> this.storeAddress(address) }
                    />
                  </div>
                  
                      <label for="name ">Nationality</label>
                      <Country
                      nationality={ (nationality)=> this.storeAddress(nationality) }
                      />
                    </div>
                    <div className="col">
                      <label for="name ">National ID/Passport</label>
                      <FormField
                       id={"nationalID"}
                       formdata={this.state.formdata.nationalID}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                    <div className="col">
                      <label for="name ">Insurance </label>
                      <FormField
                       id={"insurance"}
                       formdata={this.state.formdata.insurance}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-7 offset-2">
                      {" "}
                      <label for="name ">Ubudehe</label>
                      <FormField
                   id={"ubudehe"}
                   formdata={this.state.formdata.ubudehe}
                   change={element => this.updateForm(element)}
                   />
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
<div id="academic-options" style={{display:this.state.third ? 'block' : 'none'}}>
  
<h6 className="text-center p-5">
                  <i className="fa fa-home fa-lg" />
                  Choose academic options
                </h6>
               
                  <div className="form-row form-group">
                  <div className="col">
                      <label for="name ">Previous Institution </label>
                      <FormField
                       id={"previousSchool"}
                       formdata={this.state.formdata.previousSchool}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                    <div className="col">
                      <label for="name ">Subject </label>
                      <FormField
                       id={"subject"}
                       formdata={this.state.formdata.subject}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <label for="name ">Year of Completion(A Level)</label>
                      <FormField
                       id={"completionYear"}
                       formdata={this.state.formdata.completionYear}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                  
                    <div className="col">
                      {" "}
                      <label>Option to be Admitted</label>
                      <FormField
                   id={"department"}
                   formdata={this.state.formdata.department}
                   change={element => this.updateForm(element)}
                   />
                    </div>
                  </div>
                  <div className="form-row mt-3">
                  <div className="col">
                  <label for="name ">Year Admitted in</label>
                  <FormField
                   id={"yearAdmittedIn"}
                   formdata={this.state.formdata.yearAdmittedIn}
                   change={element => this.updateForm(element)}
                   />
                    </div>
                  </div>
                  <div className="form-row mt-3">
                    <div className="col">
                      <label for="name ">Program</label>
                    
                      <FormField
                       id={"program"}
                       formdata={this.state.formdata.program}
                       change={element => this.updateForm(element)}
                      />
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
                 
                  <div className="form-row p-3">
                    <div className="col">
                      
                      <ImageUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    </div>
                   
                  </div>
                  <div className="form-row p-2">
                    <div className="col">
                    <h6 className="purple">A Level certificate</h6>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    <hr/>
                    </div>

                    <div className="col">
                    <h6 className="purple">ID card or Passport</h6>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    <hr/>
                    </div>
                  </div>
                  <div className="form-row p-2">
                  <div className="col">
                    <h6 className="purple">Progressive Reports</h6>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    <hr/>
                    </div>
                    <div className="col">
                    <h6 className="purple">Bank Slip for registration payment</h6>
                    <FilesUpload filename={ (filename)=> this.storeFilename(filename) }/>
                    
                    <div className="form-group">
                    <FormField
                       id={"bankslip"}
                       formdata={this.state.formdata.bankslip}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <hr/>
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
                  <div className="form-group">
            
                    <FormField
                       id={"healthState"}
                       formdata={this.state.formdata.healthState}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <h6 className="font-weight-bold p-2">
                    SCHOOL FEES Sponsor
                  </h6>
                  <div className="form-group">
                    <FormField
                       id={"schoolFeesSponsor"}
                       formdata={this.state.formdata.schoolFeesSponsor}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div className="form-row p-2">
                    <div className="col-md-7">
                    <FormField
                       id={"sponsor"}
                       formdata={this.state.formdata.sponsor}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                  </div>
                 
                  <h6 className="pt-5">
                    Candidate, agree that information given are true and correct
                  </h6>
                  <div className="form-che p-2">
                    <div className="col-10">
                    <div class="form-check">
                   
                  <FormField
                       id={"agree"}
                       formdata={this.state.formdata.agree}
                       change={element => this.updateForm(element)}
                      />
                       <label class="form-check-label">I agree</label>
                      </div>
                      </div>
                    
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
