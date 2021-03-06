import React, { useEffect, useRef, useState } from "react";
import "./styles/form.css";
import BorrowerInfo from "./Screens/BorrowerInfo";
import {
  decreaseFormStep,
  increaseFormStep,
  resetFormStep,
  setFormStepInvalid,
} from "../../redux/actions/formStepActions";
import { useDispatch, useSelector } from "react-redux";
import LoanInfo from "./Screens/LoanInfo";
import emailjs from "@emailjs/browser";
import RefinanceDetails from "./Screens/RefinanceDetails";
import PropertyInfo from "./Screens/PropertyInfo";
import LegalDisclosure from "./Screens/LegalDisclosure";
import ProgressBar from "../ProgressBar/ProgressBar";
import SuccessScreen from "./Screens/SuccessScreen";
import axios from "axios";
import { clearFormState } from "../../redux/actions/formStateActions";
import FixedErrorMessage from "../Shared/FixedErrorMessage/FixedErrorMessage";
import { checkInvalidInputs } from "../../utils/checkInvalidInputs";

const Form = (props) => {
  const [invalidQuestions, setInvalidQuestions] = useState([]);

  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep.step);
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const dispatch = useDispatch();

  const nextHandler = (e) => {
    console.log("Next");
    // let invalidQs = [];
    // const requiredInputs = document.querySelectorAll("input[required]");
    // requiredInputs.forEach((i) => {
    //   if (i.value === "") {
    //     console.log("EMPTY", i);
    //     invalidQs.push(i);
    //   }
    // });

    let iv = checkInvalidInputs();

    console.log("invalidQuestions", iv);
    if (iv.length < 1) {
      document.querySelector("#root").scrollTo(0, 0);
      setInvalidQuestions([]);
      setTimeout(() => {
        if (formStep === 5) {
          console.log("Submit");
          sendEmail();
        }
        dispatch(increaseFormStep());
      }, 200);
    } else {
      dispatch(setFormStepInvalid());
      // setInvalidQuestions(invalidQs);
    }
  };
  const backHandler = (e) => {
    document.querySelector("#root").scrollTo(0, 0);
    setTimeout(() => {
      dispatch(decreaseFormStep());
    }, 200);
    // window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Back");
  };

  const sendEmail = (e) => {
    console.log("SENDING EMAIL", JSON.stringify(formState));
    emailjs.send(
      "service_ehu8fai",
      "template_e0tci3p",
      formState,
      "scCzVqaPXVULniIEU"
    );
  };

  const resetHandler = () => {
    dispatch(resetFormStep());
    dispatch(clearFormState());
  };

  useEffect(() => {}, []);

  return (
    <div className="form-outer-wrapper">
      <BorrowerInfo nextHandler={nextHandler} backHandler={backHandler} />
      <LoanInfo nextHandler={nextHandler} backHandler={backHandler} />
      <RefinanceDetails nextHandler={nextHandler} backHandler={backHandler} />
      <PropertyInfo nextHandler={nextHandler} backHandler={backHandler} />
      <LegalDisclosure nextHandler={nextHandler} backHandler={backHandler} />
      <SuccessScreen nextHandler={resetHandler} backHandler={backHandler} />
      <FixedErrorMessage
        show={!formStepIsValid}
        invalidQuestions={invalidQuestions}
      />
    </div>
  );
};

export default Form;
