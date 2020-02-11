import React, { Component } from "react";
import { Col,Button ,Row} from 'reactstrap';
import FormField from "../formFild";
import logo from '../../images/logo.png';
import Address from "../help/address";
import FilesUpload from "../help/fileUpload";
import ImageUpload from "../help/uploadImage";
import Country from "../help/country";
// import Province from "../help/province";
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
},department: {
  element: "select",
  value: "",
  config: {
    className:"form-control",
    options:[  { id: 1, name:'Computer Application' },
        { id: 2, name:'Masonery' },
        { id: 3, name: 'Surveying' },
        { id: 4, name: 'Road Contruction' }
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
grade: {
  element: "select",
  value: "",
  config: {
    className:"form-control",
    options:[  { id: 1, name:'Pass' },
        { id: 2, name:'Repeat' },
  ],
    // type: "",
    name: "grade"
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
parentContact: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "parentContact"
  },
  validation: {
    parentContact:true
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
sponsor: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    placeholder:"Sponsor Contact",
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
  value: "NGO",
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
  value: "GOV",
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
specialNeed: {
  element: "input",
  value: "Special Need",
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
  value: "agree",
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
  value: "Physical Disability",
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
  value: "Parent",
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
  value: "other person",
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
farg: {
  element: "input",
  value: "FARG",
  config: {
    className:"form-check-input",
    type: "checkbox",
    name: "farg"
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
  value: "Part Time",
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
  value: "Full Time",
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
  value: "General Case",
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
results: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    placeholder:"Enter result above 30%",
    type: "text",
    name: "results"
  },
  validation: {
    required: true,
    results:true
  },
  valid: false,
  touched: false,
  validationMessage: ""
},
attendegSchool: {
  element: "input",
  value: "",
  config: {
    className:"form-control",
    type: "text",
    name: "attendegSchool"
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
    if(element.validation.bankslip){
      const valid = !isNaN(element.value)&& element.value.length >3;
      const message = `${!valid ? 'must be greater than 3  ':''}`;
      error = !valid ? [valid,message] : error
  }
    if(element.validation.id){
        const valid = !isNaN(element.value)&& element.value.length >= 16;
        const message = `${!valid ? 'must be 16 digits or greater   ':''}`;
        error = !valid ? [valid,message] : error
    }
    if(element.validation.results){
      const valid = !isNaN(element.value)&& element.value.length >= 30;
      const message = `${!valid ? 'must be above 30  ':''}`;
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
      alert(dataToSubmit);
      console.log(dataToSubmit);
      // if(formIsValid){
      //     this.setState({
      //         loading:true,
      //         registerError:''
      //     })
          
          // if(type){
          //     firebase.auth()
          //     .signInWithEmailAndPassword(
          //         dataToSubmit.email,
          //         dataToSubmit.password
          //     ).then(()=>{
          //         this.props.history.push('/home')
          //     }).catch( error =>{
          //         this.setState({
          //             loading:false,
          //             registerError: error.message
          //         })
          //     })

          // } 
          // else {
          //     firebase.auth()
          //     .createUserWithEmailAndPassword(
          //         dataToSubmit.email,
          //         dataToSubmit.password
          //     ).then(()=>{
          //         this.props.history.push('/home')
          //     }).catch( error =>{
          //         this.setState({
          //             loading:false,
          //             registerError: error.message
          //         })
          //     })
          // }
      // }
      
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
              <li className=" font ">Advanced Level(A2)</li>
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
                <div id="stud-name" style={{display:this.state.first ? 'block' : 'none',minHeight:'900px'}}>
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
                       <label for="name ">Last Name </label>
                      <FormField
                       id={"lastname"}
                       formdata={this.state.formdata.lastname}
                       change={element => this.updateForm(element)}
                      />
                       <label for="name ">Date of Birth</label>
                      <FormField
                       id={"dob"}
                       formdata={this.state.formdata.dob}
                       change={element => this.updateForm(element)}
                      />
                       <label for="name ">Gender</label>
                  <FormField
                  id={"gender"}
                  formdata={this.state.formdata.gender}
                  change={element => this.updateForm(element)}
                  />
                    </div>
                    <div className="col">
                   
                   <label for="name ">Father's name</label>
                    <FormField
                       id={"father"}
                       formdata={this.state.formdata.father}
                       change={element => this.updateForm(element)}
                      />
                      <label for="name ">Mother'S Name </label>
                    <FormField
                       id={"mother"}
                       formdata={this.state.formdata.mother}
                       change={element => this.updateForm(element)}
                      />
                       <label for="name ">Guardian's Name </label>
                    <FormField
                       id={"guardian"}
                       formdata={this.state.formdata.guardian}
                       change={element => this.updateForm(element)}
                      />
                      <label for="name ">Parent or Guardian's Contact </label>
                    <FormField
                       id={"parentContact"}
                       formdata={this.state.formdata.parentContact}
                       change={element => this.updateForm(element)}
                      />
                   </div>
                 
                  </div>
                  <Row className="form-group p-5">
                    
      <Col md={{ size: 5,offset: 8 }}>
                  <Button onClick={this.onClickFirst} color="primary">
                   <span><i className="fa fa-arrow-right fa-lg m-2"/>Continue</span>
                  </Button>
       </Col>
      </Row>
                  </div>   
<div id="residence" style={{display:this.state.second ? 'block' : 'none',minHeight:'900px'}}>
  
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
                  
                      <label for="name ">Insurance </label>
                      <FormField
                       id={"insurance"}
                       formdata={this.state.formdata.insurance}
                       change={element => this.updateForm(element)}
                      />
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
<div id="academic-options" style={{display:this.state.third ? 'block' : 'none',minHeight:'900px'}}>
  
<h6 className="text-center p-5">
                  <i className="fa fa-home fa-lg" />
                  Choose academic options
                </h6>
               
                  <div className="form-row form-group">
                  <div className="col">
                      <label for="name ">Attended School </label>
                      <FormField
                       id={"attendegSchool"}
                       formdata={this.state.formdata.attendegSchool}
                       change={element => this.updateForm(element)}
                      />
                      <label for="name ">Year of Completion(O'Level)</label>
                      <FormField
                       id={"completionYear"}
                       formdata={this.state.formdata.completionYear}
                       change={element => this.updateForm(element)}
                      />
                    </div>
                    <div className="col">
                      <label for="name ">Result(%)</label>
                      <FormField
                       id={"results"}
                       formdata={this.state.formdata.results}
                       change={element => this.updateForm(element)}
                      />
                       <label for="name ">Pass(p) Repeat(R)</label>
                       <FormField
                   id={"grade"}
                   formdata={this.state.formdata.grade}
                   change={element => this.updateForm(element)}
                   />
                    </div>
                  </div>
                  <div className="form-row">
                   
                  
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
               <div id="documents" style={{display:this.state.fourth ? 'block' : 'none',minHeight:'900px'}}>
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
                          ("O" Level certificate, Passport photo, Progressive Report from S1 to S3, Bank Slip of registration payment)
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
                 <div id="other-info" style={{display:this.state.fifth ? 'block' : 'none',minHeight:'900px'}}>
                 <h6 className="text-center p-5">
                  <i className="fa fa-info fa-lg" />
                    PARTICULAR INFORMATION
                  </h6>
                  <hr/>
                  <h6 className="font-weight-bold p-2">HEALTH STATE:</h6>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" for="inlineCheckbox1">
                      {" "}
                      General Case
                    </label>
                    <FormField
                       id={"generalCase"}
                       formdata={this.state.formdata.generalCase}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" for="inlineCheckbox2">
                      Special Need
                    </label>
                    <FormField
                       id={"specialNeed"}
                       formdata={this.state.formdata.specialNeed}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" for="inlineCheckbox3">
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
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" for="inlineCheckbox1">
                      parents
                    </label>
                    <FormField
                       id={"parent"}
                       formdata={this.state.formdata.parent}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" for="inlineCheckbox2">
                      Another person
                    </label>
                    <FormField
                       id={"otherPerson"}
                       formdata={this.state.formdata.otherPerson}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" for="inlineCheckbox3">
                      NGO
                    </label>
                    <FormField
                       id={"ngo"}
                       formdata={this.state.formdata.ngo}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" for="inlineCheckbox3">
                      GOV FUNDS
                    </label>
                    <FormField
                       id={"gov"}
                       formdata={this.state.formdata.gov}
                       change={element => this.updateForm(element)}
                      />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" for="inlineCheckbox3">
                      FARG
                    </label>
                    <FormField
                       id={"farg"}
                       formdata={this.state.formdata.farg}
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
                  <div className="form-check form-check-inline">
                  <FormField
                       id={"agree"}
                       formdata={this.state.formdata.agree}
                       change={element => this.updateForm(element)}
                      />
                    <label className="form-check-label" >
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
