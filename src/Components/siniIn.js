import React, { Component } from "react";
import FormField from "./formFild";
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
class SignIn extends Component {
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
     
      login: {
        element: "button",
        value: "Sign In",
        config: {
          type: "submit",
          name: "button-login"
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
}
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
submitForm = (event,type) => {
  event.preventDefault()
  if(type !== null){

    let dataToSubmit = {};
    // let formIsValid = true;
    for(let key in this.state.formdata){
dataToSubmit[key]=this.state.formdata.value;
    }
//     for(let key in this.state.formdata){
//       formIsValid = this.state.formdata[key].valid && formIsValid;
//   }
//   if(formIsValid){
//     this.setState({
//         loading:true,
//         registerError:''
//     })
   console.log(dataToSubmit)
  // }
} 
}
  submitButton = () => (
    this.state.loading ? 
        'loading...'
    :
    <div>
       
        <button  onClick={(event)=>this.submitForm(event,true)}> Sign In </button>
    </div>
)
showError = () => (
  this.state.registerError !== '' ? 
      <div className="error">{this.state.registerError}</div>
  : ''
)
  render() {
    return (
       <section>
          <div className="row ">
            
            <div className="col-md-4 logContainer">
            <span className="text-muted "><i className="fa fa-user text-muted "></i>Sign In to continue</span>
                <form 
                onSubmit={(event)=>this.submitForm(event,null)}
                >
                <div className="row">
                   <div className="col logo-img" >
                        <img src={logo} alt="logo" className=" img-fluid"  height="90"
                      width="101"/>
                    
                      <p className="logo-text font-weight-bold"> Saint Joseph Integrated Technical College</p>   
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
                <p className="link"><Link to="/sign-up" className="font-weight-bold ">Forgot password?</Link></p>
                <p  className="link"><Link to="/sign-up " className="font-weight-bold ">New Applicant</Link></p>
              </form>
            </div>
            </div>
       </section>
    );
  }
}

export default SignIn;
