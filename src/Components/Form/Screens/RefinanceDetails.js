import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Columns from "../../../layout/shared/Columns";
import formStateReducer from "../../../redux/reducers/formStateReducer";
import DatePickerInput from "../Components/FormInputs/DatePicker";
import ImageUpload from "../Components/FormInputs/ImageUpload";
import LongTextInput from "../Components/FormInputs/LongTextInput";
import NumberField from "../Components/FormInputs/NumberField";
import RadioSelector from "../Components/FormInputs/RadioSelector";
import RadioSelectorItem from "../Components/FormInputs/RadioSelectorItem";
import TextboxField from "../Components/FormInputs/TextboxField";
import FormScreen from "../Components/FormScreen/FormScreen";
import FormGroup from "../Components/shared/FormGroup";
// import "./Component.css";

const RefinanceDetails = (props) => {
  const [state, setState] = useState(null);
  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep);
  useEffect(() => {}, []);

  return (
    <FormScreen
      title="Refinance Details"
      nextHandler={props.nextHandler}
      backHandler={props.backHandler}
      show={formStep.step === 4}
    >
      <FormGroup title="Is there existing debt on the property?">
        <RadioSelector
          keyName="isExistingDebt"
          radioItems={[
            { label: "Yes", keyName: "isExistingDebt", value: true },
            { label: "No", keyName: "isExistingDebt", value: false },
          ]}
        />
      </FormGroup>
      <FormGroup title="Total unpaid principal balance being refinanced?">
        <NumberField
          keyName="unpaidPrincipal"
          label={"Unpaid Principal"}
          maxLength={3}
        />
      </FormGroup>
      <FormGroup title="Is the current loan in term or maturity default?">
        <RadioSelector
          keyName="isInTermOrMaturityDefault"
          radioItems={[
            { label: "Yes", keyName: "isInTermOrMaturityDefault", value: true },
            { label: "No", keyName: "isInTermOrMaturityDefault", value: false },
          ]}
        />
      </FormGroup>
      <Columns>
        <NumberField
          keyName="originalPurchasePrice"
          label={"Original Purchase Price"}
          maxLength={3}
        />

        <DatePickerInput
          keyName="propertyAcquiredDate"
          label={"When was the property acquired?"}
        />
      </Columns>
      <FormGroup title="Is there unfinished rehab work from the prior loan?">
        <RadioSelector
          keyName="hasUnfinishedRehabWork"
          radioItems={[
            { label: "Yes", keyName: "hasUnfinishedRehabWork", value: true },
            { label: "No", keyName: "hasUnfinishedRehabWork", value: false },
          ]}
        />
        {formState.hasUnfinishedRehabWork && (
          <LongTextInput
            keyName="hasUnfinishedRehabWorkDescription"
            placeholder="Please briefly describe any unfinished rehab work and remaining budget.
            "
          />
        )}
      </FormGroup>
      <FormGroup title="Are there any outstanding construction permits or building code violations?">
        <RadioSelector
          keyName="hasCodeViolations"
          radioItems={[
            { label: "Yes", keyName: "hasCodeViolations", value: true },
            { label: "No", keyName: "hasCodeViolations", value: false },
          ]}
        />
      </FormGroup>
      <FormGroup title="Are there any unsatisfied judgments or pending lawsuits against the guarantors and/or borrowing entity?">
        <RadioSelector
          keyName="hasPendingLawsuits"
          radioItems={[
            { label: "Yes", keyName: "hasPendingLawsuits", value: true },
            { label: "No", keyName: "hasPendingLawsuits", value: false },
          ]}
        />
      </FormGroup>
      <FormGroup title="Are there any ongoing environmental conditions at the property?">
        <RadioSelector
          keyName="hasEnvironmentalConditions"
          radioItems={[
            {
              label: "Yes",
              keyName: "hasEnvironmentalConditions",
              value: true,
            },
            {
              label: "No",
              keyName: "hasEnvironmentalConditions",
              value: false,
            },
          ]}
        />
      </FormGroup>
    </FormScreen>
  );
};

export default RefinanceDetails;
