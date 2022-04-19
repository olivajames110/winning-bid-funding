import Autocomplete from "react-google-autocomplete";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Columns from "../../../layout/shared/Columns";
import TextboxField from "../Components/FormInputs/TextboxField";
import FormScreen from "../Components/FormScreen/FormScreen";
import FormGroup from "../Components/shared/FormGroup";
import {
  months,
  nameTitles,
  identificationDocTypes,
} from "../../../config/formDropdowns";
import AddressAutofill from "../Components/FormInputs/AddressAutofill";
import RadioSelector from "../Components/FormInputs/RadioSelector";
import DropdownInput from "../Components/FormInputs/DropdownInput";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import NumberField from "../Components/FormInputs/NumberField";
import SocialSecurityInput from "../Components/FormInputs/SocialSecurityInput";
import PhoneNumberInput from "../Components/FormInputs/PhoneNumberInput";
import LongTextInput from "../Components/FormInputs/LongTextInput";
import DatePickerInput from "../Components/FormInputs/DatePicker";
import ImageUpload from "../Components/FormInputs/ImageUpload";
import PreviousUserRadioSelector from "../Components/FormInputs/PreviousUserRadioSelector";
import {
  clearFormState,
  setFormState,
} from "../../../redux/actions/formStateActions";

// import "./Component.css";

const BorrowerInfo = (props) => {
  const [isPreviousUser, setIsPreviousUser] = useState(false);
  const [pageIsValid, setPageIsValid] = useState(false);

  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep);

  const dispatch = useDispatch();

  const handlePreviousUserRadio = (e) => {
    let val = e.target.value;
    console.log("----------------Val", val);
    if (val === "yes") {
      const data = JSON.parse(localStorage.getItem("userData"));
      console.log(data);
      dispatch(setFormState(data));
      console.log("sent");
      return;
    }

    if (val === "no") {
      console.log("clear");

      dispatch(clearFormState());
    }
    if (val === "clear") {
      localStorage.removeItem("userData");
      dispatch(clearFormState());
      setIsPreviousUser(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      console.log("User Exists");
      setIsPreviousUser(true);
    } else {
      setIsPreviousUser(false);
    }
  }, []);
  return (
    <FormScreen
      title="Borrower Information"
      nextHandler={props.nextHandler}
      backHandler={props.backHandler}
      show={formStep.step === 1}
      direction={formStep.direction}
    >
      {isPreviousUser && (
        <PreviousUserRadioSelector onChange={handlePreviousUserRadio} />
      )}

      {/* NAME  */}
      <FormGroup title="Personal Information">
        <Columns customColumns={[2, 5, 5]}>
          <DropdownInput
            keyName="nameTitle"
            label="Title"
            downdownItems={nameTitles}
            value={formState.nameTitle}
          />
          <TextboxField keyName="nameFirst" label={"First Name"} isRequired />

          <TextboxField keyName="nameLast" label={"Last Name"} isRequired />
        </Columns>
        <Columns>
          <PhoneNumberInput />
          <TextboxField keyName="emailAddress" label={"Email Address"} />
        </Columns>
      </FormGroup>

      {/* DOB */}
      <FormGroup title="Date of Birth">
        <Columns>
          <DropdownInput
            keyName="dobMonth"
            label="Month"
            downdownItems={months}
            value={formState.dobMonth}
          />
          <NumberField keyName="dobDay" label={"Day"} maxLength={2} />
          <NumberField keyName="dobYear" label={"Year"} maxLength={4} />
        </Columns>
      </FormGroup>

      {/* PRIMARY ADDRESS  */}
      <FormGroup title="Primary Address">
        <AddressAutofill keyName="primaryAddress" />
      </FormGroup>
      <FormGroup title="Are you a US Citizen?">
        <RadioSelector
          keyName="isCitizen"
          radioItems={[
            { label: "Yes", keyName: "isCitizen", value: true },
            { label: "No", keyName: "isCitizen", value: false },
          ]}
        />
      </FormGroup>

      {/* CITIZENSHIP  */}
      <FormGroup title="Identity and Citizenship Verification">
        <SocialSecurityInput label={"Social Security Number"} />
        <NumberField
          keyName="identificationNumber"
          label={"ID Number"}
          maxLength={50}
          helperText="Passort ID or Drivers License Number"
        />
        <Columns customColumns={[6, 3, 3]}>
          <DropdownInput
            keyName="identificationDocType"
            label="ID Document Type"
            downdownItems={identificationDocTypes}
            value={formState.identificationDocType}
          />
          <DatePickerInput
            keyName="identificationIssueDate"
            label={"Date of Issue"}
          />
          <DatePickerInput
            keyName="identificationExpirationDate"
            label={"Expiration Date"}
          />
        </Columns>
      </FormGroup>
      <FormGroup title="Please Upload Photo ID">
        <ImageUpload
          keyName="identificationImage"
          helperText="If you have any technical issues uploading the photo ID, please feel free email it to us at contact@flatironrealtycapital.com"
        />
      </FormGroup>
    </FormScreen>
  );
};

export default BorrowerInfo;
