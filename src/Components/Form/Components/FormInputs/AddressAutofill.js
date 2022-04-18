import React, { useEffect, useState } from "react";
import Columns from "../../../../layout/shared/Columns";
// import "./styles/AddressAutofill.css";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import FormInput from "./FormInput";
import TextboxField from "./TextboxField";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormState,
  updateFormState,
} from "../../../../redux/actions/formStateActions";

const AddressAutofill = (props) => {
  const [state, setState] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDiCCD6U26ElYlxfP2Fkw67RRkpFT5lL90",
    libraries: ["places"],
  });

  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();

  if (!isLoaded) {
    return <div>Empty</div>;
  }

  const onLoad = (autocomplete) => {
    console.log(autocomplete);
    setState(autocomplete);
  };

  const handleStreetAddressChange = (event) => {
    let val = event.target.value;
    let keyName = props.keyName;
    if (val === "") {
      console.log("Not Valid");
      // setIsValid(false);
    } else {
      console.log("Valid");
      // setIsValid(true);
      // setValue(val);
    }

    dispatch(
      updateFormState({ keyName: `${props.keyName}Street`, value: val })
    );
  };

  const onAddressChangeHandler = (e) => {
    console.log("Change", e);

    if (state !== null) {
      const foundAddress = state.getPlace();

      console.log(foundAddress);
      const primaryAddress = {
        [`${props.keyName}Street`]: `${foundAddress.address_components[0].short_name} ${foundAddress.address_components[1].short_name}`,
        [`${props.keyName}City`]: foundAddress.vicinity,
        [`${props.keyName}State`]:
          foundAddress.address_components[5].short_name,
        [`${props.keyName}Zip`]: foundAddress.address_components[7].short_name,
      };

      const newState = { ...formState, ...primaryAddress };
      console.log("NEW", newState);
      dispatch(setFormState(newState));
      // dispatch(
      //   updateFormState({ keyName: "primaryAddress", value: primaryAddress })
      // );
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  return (
    <div className="address-autofill-wrapper">
      <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onAddressChangeHandler}
        className="auto-complete"
        types={["address"]}
      >
        <FormInput>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            id="outlined-basic"
            label={props.label}
            required={props.isRequired}
            onChange={handleStreetAddressChange}
            style={props.style}
            keyName={`${props.keyName}Street`}
            value={formState.primaryAddressStreet}
          />
        </FormInput>
      </Autocomplete>

      <Columns>
        <TextboxField keyName={`${props.keyName}City`} label={"City"} />
        <TextboxField keyName={`${props.keyName}State`} label={"State"} />
        <TextboxField keyName={`${props.keyName}Zip`} label={"ZIP"} />
      </Columns>
    </div>
  );
};

export default AddressAutofill;
