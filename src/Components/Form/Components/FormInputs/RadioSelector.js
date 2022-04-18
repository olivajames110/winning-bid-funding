import { RadioGroup } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import "./styles/RadioSelector.css";
import RadioSelectorItem from "./RadioSelectorItem";
const RadioSelector = (props) => {
  const formState = useSelector((state) => state.formState);

  const handleRadioChange = () => {};
  return (
    <div className="radio-selection-wrapper">
      <RadioGroup
        aria-labelledby="radio-selection-buttons-group-label"
        defaultValue={formState[props.keyName]}
        name="radio-buttons-group"
        className="radio-selector-items-container"
      >
        {props.radioItems.map((r) => (
          <RadioSelectorItem
            label={r.label}
            keyName={r.keyName}
            value={r.value}
            labelPlacement="bottom"
          />
        ))}
      </RadioGroup>
    </div>
  );
};
export default RadioSelector;
