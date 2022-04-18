import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import "../../assets/styles/transitionAnimations/slideUp/slideUp.css";

import ProgressBarItem from "./Components/ProgressBarItem/ProgressBarItem";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
const ProgressBar = (props) => {
  //Component state
  const [step, setStep] = useState(props.formStep || 1);

  useEffect(() => {
    setStep(props.formStep);
  }, [props.formStep]);

  return (
    <div className="progress-bar-container">
      {props.steps.map((p, i) => {
        if (p) {
          return (
            <ProgressBarItem
              key={i + 1}
              label={p}
              stepNumber={i + 1}
              currentStep={step}
              isActive={i + 1 === step}
              isCompleted={i + 1 < step}
              isLastChild={i === props.steps.length - 1}
            />
          );
        }
      })}
    </div>
  );
};
export default ProgressBar;
