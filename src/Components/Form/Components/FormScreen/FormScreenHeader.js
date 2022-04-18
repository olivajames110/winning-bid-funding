import React from "react";
import "./styles/FormScreenHeader.css";

const FormScreenHeader = (props) => {
  return (
    <div className="form-screen-title-outer-wrapper">
      <h2>{props.title}</h2>
    </div>
  );
};

export default FormScreenHeader;
