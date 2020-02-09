import React from "react";
import "./formfield.css";

const FormFields = ({ formdata, change, id }) => {
  const showError = () => {
    let errorMessage = null;

    if(formdata.validation && !formdata.valid){
        errorMessage = (
            <div className="labelError">
                {formdata.validationMessage}
            </div>
        )
    }

    return errorMessage;
}
  let formtemplate = null;
  switch (formdata.element) {
    case('input'):
      formtemplate = (
        <div>
          <input
            {...formdata.config}
            value={formdata.value}
            onBlur={event => change({ event, id, blur: true })}
            onChange={event => change({ event, id, blur: false })}
          />
          { showError() }
        </div>
      );

      break;
      case('select'):
      formtemplate = (
          <div>
              <select
                  value={formdata.value}
                  name={formdata.config.name}
                  class={formdata.config.className}
                  onBlur={(event) => change({event,id,blur:true})}
                  onChange={(event) => change({event,id,blur:false})}
              >
                  { formdata.config.options.map((item,i)=>(
                      <option key={i} value={item.name}>{item.name}</option>
                  ))}

              </select>
          </div>
      )
      break;
      
    default:
      formtemplate = null;
  }
  return formtemplate;
};

export default FormFields;
