import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";

const SocialSecurityInput = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formState = useSelector((state) => state.formState);

  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const dispatch = useDispatch();

  const formatSSNum = (num) => {
    if (!num) {
      console.log("EXIT", num);
      return;
    }
    let numLength = num.length;
    let formattedNum;

    console.log("numLength", numLength);
    if (numLength >= 6) {
      console.log("2 DASH START");
      const splitNum = num.split("");
      splitNum.splice(5, 0, "-");
      splitNum.splice(3, 0, "-");
      console.log("SN", splitNum);
      formattedNum = splitNum.join("");
      setValue(formattedNum);
      return formattedNum;
    }

    if (numLength > 3 && numLength < 6) {
      console.log("1 DASH START");
      const splitNum = num.split("");
      console.log(splitNum);
      splitNum.splice(3, 0, "-");
      formattedNum = splitNum.join("");
      setValue(formattedNum);
      return formattedNum;
    }
    return formattedNum;
  };

  const handleChange = (event) => {
    let val = event.target.value.replace("-", "");
    let filterVal = val
      .split("")
      .filter((n) => n !== "-")
      .join("");
    console.log("FILTER", !isNaN(val));
    if (!isNaN(filterVal) && filterVal.length <= 9) {
      dispatch(
        updateFormState({ keyName: "ssn", value: formatSSNum(filterVal) })
      );
    } else {
      dispatch(updateFormState({ keyName: "ssn", value: "3" }));
    }
  };

  // useEffect(() => {
  //   setValue(formatSSNum(formState.ssn));
  // }, [formStep]);
  return (
    <div className="text-box-wrapper">
      <FormInput>
        <TextField
          error={!formStepIsValid && props.isRequired && formState.ssn === ""}
          variant="outlined"
          size="small"
          fullWidth
          id="outlined-basic"
          label={props.label}
          name={"ssn"}
          onChange={handleChange}
          value={formState.ssn}
          required={props.isRequired}
          style={props.style}
          InputLabelProps={{
            shrink: formState.ssn === "" || undefined ? false : true,
          }}
          inputProps={props.inputProps}
        />
      </FormInput>
    </div>
  );
};

export default SocialSecurityInput;
