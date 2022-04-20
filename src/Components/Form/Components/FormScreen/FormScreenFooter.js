import React from "react";
import { useSelector } from "react-redux";
import "./styles/FormScreenFooter.css";

const FormScreenFooter = (props) => {
  const formStep = useSelector((state) => state.formStep);
  const nextAndBackButtons = (
    <div className="form-footer-button-outer-wrapper">
      <button
        onClick={props.backHandler}
        style={{ visibility: formStep.step !== 1 ? "visible" : "hidden" }}
        type="button"
        id="back"
        className="form-screen-footer-button"
      >
        {" "}
        Back
      </button>
      <button
        onClick={props.nextHandler}
        id="next"
        type="button"
        className="form-screen-footer-button"
      >
        {formStep.step === 5 ? "Submit" : "Next"}
      </button>
    </div>
  );
  return (
    <div className="form-screen-footer-outer-wrapper">
      {formStep.step <= 5 && nextAndBackButtons}
      {/* {formStep.step >= 6 && (
        <button
          onClick={props.nextHandler}
          type="button"
          id="next"
          className="form-screen-footer-button"
        >
          Reset Form
        </button>
      )} */}
    </div>
  );
};

export default FormScreenFooter;
