import React, { Component } from "react";
import FormField from "../../formFild";

class StudentDetForm extends Component {
  state = {
    registerError: "",
    loading: false,
    formdata: {
      gender: {
        element: "input",
        value: "",
        config: {
          className:"input",
          type: "text",
          name: "gender"
        }},
        name: {
            element: "input",
            value: "",
            config: {
              className:"input",
              type: "text",
              name: "name"
            }},
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
  render() {
    return (
          
               <form 
                >
                     <div className="form-row form-group">
                    <div className="col-5 ">
                      <label for="name ">Department </label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">Cival Engineering</label>
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col-5">
                      <label for="name ">ID </label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">133456789</label>
                    </div>
                    </div>
                <div className="form-row form-group">
                    <div className="col-5">
                      <label for="name ">Name </label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">Umulisa Clemence</label>
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col-5">
                      <label for="name ">Gender </label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">Female</label>
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col-5">
                      <label for="name ">Father's Name </label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">Kalisa Claude</label>
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col-5">
                      <label for="name ">Mother's Name</label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">Ellen Khan</label>
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col-5">
                      <label for="name ">Date of Birth</label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">13/13/3001</label>
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col-5">
                      <label for="name ">Email </label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">clemy@gmail.com</label>
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col-5">
                      <label for="name ">Admission Date </label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">01/01/3030</label>
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col-5">
                      <label for="name ">Phone </label>
                    </div>
                    <div className="col-7">
                    <label className="font-weight-bold text-muted">07888888888</label>
                    </div>
                    </div>

                 </form>
    );
  }
}

export default StudentDetForm;
