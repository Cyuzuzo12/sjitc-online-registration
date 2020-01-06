import React, { Component } from "react";
import FormField from "./formFild";
import FontAwesome from "react-fontawesome";
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
        element: "input",
        value: "Sign in",
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
    };
    const newElement = {
      ...newFormdata[element.id]
    };
    newElement.value = element.event.target.value;
    newFormdata[element.id] = newElement;

    this.setState({
      formdata: newFormdata
    });
  };
  render() {
    return (
        <div className="row justify-content-center ">
            
      <div className="col-md-4 logContainer">
      <span><i className="fa fa-user "></i>Sign In to continue</span>
          <form>
          <div className="row">
             <div className="col logo-img" >
                  <img src={logo} alt="logo" className=" img-fluid"  height="90"
                width="101"/>
              
                <p className="logo-text font-weight-bold"> Saint Joseph Integrated Technical College</p>   
                </div>
             </div>
            
          <FormField
            id={"email"}
            formdata={this.state.formdata.email}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={"password"}
            formdata={this.state.formdata.password}
            change={element => this.updateForm(element)}
          />
           <FormField
            id={"login"}
            formdata={this.state.formdata.login}
            change={element => this.updateForm(element)}
            // className="login-button"
          />
          <p className="link"><Link to="/sign-up" className="font-weight-bold ">Forgot password?</Link></p>
          <p  className="link"><Link to="/sign-up " className="font-weight-bold ">New Applicant</Link></p>
        </form>
      </div>
      </div>
    );
  }
}

export default SignIn;
