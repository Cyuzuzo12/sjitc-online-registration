import React from "react";
import "./formfield.css";

const FormFields = ({ formdata, change, id }) => {
  let formtemplate = null;
  switch (formdata.element) {
    case "input":
      formtemplate = (
        <div>
          <input
            {...formdata.config}
            value={formdata.value}
            onBlur={event => change({ event, id, blur: true })}
            onChange={event => change({ event, id, blur: false })}
          />
        </div>
      );

      break;
      case "label":
        formtemplate = (
          <div>
            <label
            {...formdata.config}
            >{formdata.value}</label>
          </div>
        );
        break;
    case "button":
      formtemplate = (
        <div>
          
          <button
          {...formdata.config}
          >{formdata.value}</button>
        </div>
      );
      break;
      
    default:
      formtemplate = null;
  }
  return formtemplate;
};

export default FormFields;
