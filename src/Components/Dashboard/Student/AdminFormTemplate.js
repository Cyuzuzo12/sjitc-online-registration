import React, { Component } from "react";
import FormField from "../../formFild";
import FilesUpload from "../../help/fileUpload";
import { Link } from "react-router-dom";

class AdminFormTemplate extends Component {
  state = {
    registerError: "",
    loading: false,
    formdata: {
      gender: {
        element: "input",
        value: "",
        config: {
          type: "text",
          name: "gender"
        }},
        name: {
            element: "input",
            value: "",
            config: {
              className:"form-control",
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
                     <h6 className="font-weight-bold">Student Information </h6>
                    <hr className="font-weight-bold bg-secondary" style={{width:'15%',
                    marginLeft:'1px',height:'5px'
                  
                  }}/>
                     <div className="form-row form-group">
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col">
                    <label for="name ">Upload File</label>
                     <FilesUpload/>
                    </div>
                    <div className="col">
                    <label for="name ">Upload File</label>
                     <FilesUpload/>
                    </div>
                    <div className="col">
                    <label for="name ">Upload File</label>
                     <FilesUpload/>
                    </div>
                    <div className="col">
                    <label for="name ">Upload File</label>
                     <FilesUpload/>
                    </div>
                    </div>
                    <h6 className="font-weight-bold">Parent Information </h6>
                    <hr className="font-weight-bold bg-secondary" style={{width:'15%',
                    marginLeft:'1px',height:'5px'
                  
                  }}/>
                      <div className="form-row form-group">
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    </div>
                    <div className="form-row form-group">
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                      <label for="name ">Department </label>
                      <FormField
                  id={"name"}
                  formdata={this.state.formdata.name}
                  change={element => this.updateForm(element)}
                />
                    </div>
                    <div className="col">
                    <label for="name ">Upload File</label>
                     <FilesUpload/>
                    </div>
                    </div>
                    <button type="submit" style={{
                         background:'#faf607',
                         color:'#042354',
                         width:'30%',
                         padding:'10px'
                    }}> Save </button>
                 </form>
    );
  }
}

export default AdminFormTemplate;
