import React from "react";
// import WaiverForm from "../../components/WaiverForm/WaiverForm";
// import Email from "../../Components/Email";
import "./Main.css";
// import '../../Components/WaiverForm/WaiverForm.css'
// import Card from "../../components/Shared/CardSection/Card";
import Card from "../../Components/Shared/Card/Card";
import Form from "../../Components/Form/Form";
import { useSelector } from "react-redux";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
const Main = (props) => {
  const formStep = useSelector((state) => state.formStep.step);

  return (
    <main>
      <ProgressBar
        steps={[
          "Borrower Information",
          "Loan Information",
          "Property Information",
          "Refinance Details",
          "Legal Disclosure & Signature",
        ]}
        formStep={formStep}
      />

      <Form />
    </main>
  );
};
export default Main;
