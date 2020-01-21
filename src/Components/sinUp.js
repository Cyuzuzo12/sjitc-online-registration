import React, { Component } from 'react';
import FormField from "./formFild";
import logo from '../images/logo.png';
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    registerError: "",
    loading: false,
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          placeholder: "Enter email",
          className:"input",
          type: "email",
          name: "email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          placeholder: "Enter password",
          className:"input",
          type: "password",
          name: "password"
        },
        validation: {
          required: true,
          password: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      student: {
        element: "input",
        value: "Student",
        config: {
          type: "radio",
          className:"form-check-input",
          name: "student"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      teacher: {
        element: "input",
        value: "Teacher",
        config: {
          type: "radio",
          className:"form-check-input",
          name: "teacher"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      staff: {
        element: "input",
        value: "Staff",
        config: {
          type: "radio",
          className:"form-check-input",
          name: "staff"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
     
      create: {
        element: "button",
        value: "Sign Up",
        config: {
          type: "submit",
          name: "button-create"
        }
      }
    }
  };

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

    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Must be a valid email':''}`;
        error = !valid ? [valid,message] : error
    }

    if(element.validation.password){
        const valid = element.value.length >= 5;
        const message = `${!valid ? 'Must be greater than 5':''}`;
        error = !valid ? [valid,message] : error
    }

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
       
        <button type="submit"> Sign Up </button>
    </div>
)
showError = () => (
  this.state.registerError !== '' ? 
      <div className="error">{this.state.registerError}</div>
  : ''
)
  render() {
    return (
        <div className="row">
            
      <div className="col-md-4 logContainer">
      <span className="text-muted "><i className="fa fa-user-plus text-muted "></i>Sign Up to continue</span>
          <form onSubmit={()=>this.submitForm()}>
          <div className="row">
             <div className="col logo-img" >
                  <img src={logo} alt="logo" className=" img-fluid"  height="90"
                width="101"/>
              
                <p className="logo-text font-weight-bold"> Saint Joseph Integrated Technical College</p>   
                </div>
             </div>
             <div className="user-type bg-light">
          <div className="form-check form-check-inline">

          <FormField
            id={"student"}
            formdata={this.state.formdata.student}
            change={element => this.updateForm(element)}
          />
          <label className="form-check-label">Student</label>
          </div>
          <div className="form-check form-check-inline">
           <FormField
            id={"teacher"}
            formdata={this.state.formdata.teacher}
            change={element => this.updateForm(element)}
          />
          <label className="form-check-label">Teacher</label>
          </div>
          <div className=" form-check form-check-inline">
          <FormField
            id={"staff"}
            formdata={this.state.formdata.staff}
            change={element => this.updateForm(element)}
          />
          <label className="form-check-label">Staff</label>
          </div>
             </div>
           <div className="log-fa">
           <span> <i className="fa fa-envelope fa-lg"/></span>
          <FormField
            id={"email"}
            formdata={this.state.formdata.email}
            change={element => this.updateForm(element)}
          />
           </div>
           <div className="log-fa">
           <span> <i className="fa fa-envelope fa-lg"/></span>
          <FormField
            id={"email"}
            formdata={this.state.formdata.email}
            change={element => this.updateForm(element)}
          />
           </div>
           <div className="log-fa">
           <span> <i className="fa fa-lock fa-lg"/></span>
          <FormField
            id={"password"}
            formdata={this.state.formdata.password}
            change={element => this.updateForm(element)}
          />
          </div>
          <div className="log-fa">
           <span> <i className="fa fa-lock fa-lg"/></span>
          <FormField
            id={"password"}
            formdata={this.state.formdata.password}
            change={element => this.updateForm(element)}
          />
          </div>
          <div className="log-fa">
           <span> <i className="fa fa-arrow-right fa-lg text-white"/></span>
           { this.submitButton() }
                    
          </div>
          {this.showError()}
          <p  className="link"><Link to="/sign-in" className="font-weight-bold ">Already have account</Link></p>
        </form>
      </div>
      </div>
    );
  }
}
 
export default SignUp;