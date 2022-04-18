import { FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";

// import './RadioSelectorItem.css'
const RadioSelectorItem = (props) => {
  const dispatch = useDispatch();

  const onChangeHandler = () => {
    console.log("change");
    dispatch(
      updateFormState({
        keyName: props.keyName,
        value: props.value,
      })
    );
  };
  return (
    <div className="radio-selector-item-wrapper">
      <FormControlLabel
        value={props.value}
        control={<Radio onChange={onChangeHandler} />}
        label={`${props.label} `}
        labelPlacement={props.labelPlacement || "bottom"}
      />
    </div>
  );
};
export default RadioSelectorItem;
