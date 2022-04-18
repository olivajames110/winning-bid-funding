import React, { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";
import "./styles/LongTextInput.css";
const LongTextInput = (props) => {
  const [value, setValue] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const formState = useSelector((state) => state.formState);

  const dispatch = useDispatch();
  const textboxRef = useRef();
  const handleChange = (event) => {
    let val = event.target.value;
    let keyName = props.keyName;
    if (val === "") {
      console.log("Not Valid");
      setIsValid(false);
    } else {
      console.log("Valid");
      setIsValid(true);
      setValue(val);
    }
    console.log("TEXTBOX", textboxRef.current);
    setCharCount(textboxRef.current?.value.length);
    console.log(props.keyName, val);
    dispatch(updateFormState({ keyName, value: val }));
    // props.onChange(props.keyName, val, isValid);
  };

  //   useEffect(() => {
  //     console.log("Valid is changed");
  //     if (props.error && props.value === "") {
  //       setIsValid(false);
  //     }
  //   }, [props.error, props.value]);

  return (
    <FormInput id="long-text">
      <div className="css-md26zr-MuiInputBase-root-MuiOutlinedInput-root">
        <textarea
          ref={textboxRef}
          onChange={handleChange}
          draggable="false"
          value={formState[props.keyName]}
          className="css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input"
          placeholder={props.placeholder}
          required={props.isRequired}
        ></textarea>
      </div>

      {/* <TextField
        error={!isValid}
        sx={{ fontSize: ".8rem" }}
        variant="outlined"
        size="small"
        fullWidth
        id="outlined-basic"
        label={props.label}
        onChange={handleChange}
        value={formState[props.keyName]}
        required={props.isRequired}
        style={props.style}
        minRows={4}
        placeholder={props.placeholder}
        inputRef={textboxRef}
        InputLabelProps={{
          shrink: formState[props.keyName] === "" ? false : true,
        }}
        inputProps={props.inputProps}
      /> */}
      <div className={`char-count-container ${charCount >= 25 && "valid"}`}>
        <span>{charCount}/25</span>
      </div>
    </FormInput>
  );
};

export default LongTextInput;
