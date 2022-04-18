import React from "react";
import "./styles/FormGroup.css";

const FormGroup = (props) => {
  return (
    <div style={props.style} className="form-group-outer-wrapper">
      <div className="form-group__title">{props.title}</div>
      {props.children}
    </div>
  );
};

export default FormGroup;
