import React, { useEffect, useRef, useState } from "react";
import "./styles/form.css";
import BorrowerInfo from "./Screens/BorrowerInfo";
import {
  decreaseFormStep,
  increaseFormStep,
  resetFormStep,
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

const Form = (props) => {
  const [state, setState] = useState(null);

  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep.step);
  const dispatch = useDispatch();
  const form = useRef();
  const nextHandler = (e) => {
    console.log("Next");
    document.querySelector("#root").scrollTo(0, 0);

    setTimeout(() => {
      if (formStep === 5) {
        console.log("Submit");
        sendEmail();
      }
      dispatch(increaseFormStep());
    }, 200);
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
    const data = {
      service_id: "service_ehu8fai",
      template_id: "template_e0tci3p",
      user_id: "scCzVqaPXVULniIEU",
      template_params: JSON.stringify(formState),
    };

    // axios
    //   .post(
    //     "https://api.emailjs.com/api/v1.0/email/send",

    //     JSON.stringify(data)
    //   )
    //   .then(function (response) {
    //     console.log("success?", response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    emailjs.send(
      "service_ehu8fai",
      "template_e0tci3p",
      formState,
      "scCzVqaPXVULniIEU"
    );

    // emailjs
    //   .sendForm(
    //     "service_ehu8fai",
    //     "template_e0tci3p",
    //     JSON.stringify(formState),
    //     "scCzVqaPXVULniIEU"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("sent");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    // emailjs
    //   .sendForm(
    //     "service_ehu8fai",
    //     "template_uazwrvr",
    //     data,
    //     "scCzVqaPXVULniIEU"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  const resetHandler = () => {
    dispatch(resetFormStep());
    dispatch(clearFormState());
  };

  useEffect(() => {}, []);

  return (
    <div className="form-outer-wrapper">
      <div ref={form} onSubmit={sendEmail}>
        <BorrowerInfo nextHandler={nextHandler} backHandler={backHandler} />
        <LoanInfo nextHandler={nextHandler} backHandler={backHandler} />
        <RefinanceDetails nextHandler={nextHandler} backHandler={backHandler} />
        <PropertyInfo nextHandler={nextHandler} backHandler={backHandler} />
        <LegalDisclosure nextHandler={nextHandler} backHandler={backHandler} />
        <SuccessScreen nextHandler={resetHandler} backHandler={backHandler} />
      </div>
    </div>
  );
};

export default Form;
