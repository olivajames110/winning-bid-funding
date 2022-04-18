const initState = {
  nameTitle: "",
  nameFirst: "",
  nameLast: "",
  phoneNumber: "",
  emailAddress: "",
  businessPlan: "",
  primaryAddressCity: "",
  primaryAddressState: "",
  primaryAddressZip: "",
  primaryAddressStreet: "",
  dobMonth: "",
  dobDay: "",
  dobYear: "",
  isCitzen: true,
  ssn: "",
  identificationExpirationDate: "",
  identificationIssueDate: "",
  identificationNumber: "",
  identificationDocType: "",
  identificationImage: "",
  loanType: "",
  loanPurpose: "",
  creditScore: "",
  flipsCompleted3years: "",
  flipsCompleted1year: "",
  borrowerTrackRecordDetails: "",
  rentalProperties: "",
  totalValue: "",
  isLicensedGC: "",
  hasForbearanceProperty: "",
  forbearanceEvents: "",
  forbearanceExplanation: "",
  hasFelony: "",
  felonyExplanation: "",
  isMarried: "",
  hasMultipleProperties: "",
  numOfOccupants: "",
  numOfUnits: "",
  requestedLoanAmount: "",
  purchasePrice: "",
  purchaseDate: "",
  estimatedAsInValue: "",
  renovationBudget: "",
  estimatedAfterRepairValue: "",
  monthlyRent: "",
  isExistingDebt: "",
  unpaidPrincipal: "",
  isInTermOrMaturityDefault: "",
  originalPurchasePrice: "",
  propertyAcquiredDate: "",
  hasUnfinishedRehabWork: "",
  hasUnfinishedRehabWorkDescription: "",
  hasCodeViolations: "",
  hasPendingLawsuits: "",
  hasEnvironmentalConditions: "",
};

const formStateReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_FORM_STATE":
      return action.payload;

    case "UPDATE_FORM_STATE":
      let newState = { ...state };
      console.log(action.payload.keyName, action.payload.value);
      if (action.payload.subKeyName) {
        newState[action.payload.keyName][action.payload.subKeyName] =
          action.payload.value;
      } else {
        newState[action.payload.keyName] = action.payload.value;
      }

      return newState;

    case "CLEAR_FORM_STATE":
      return initState;

    default:
      return state;
  }
};

export default formStateReducer;
