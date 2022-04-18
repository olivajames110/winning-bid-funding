const initState = {
  step: 1,
  isForward: true,
};

const formStepReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREASE_FORM_STEP":
      return {
        step: state.step + 1,
        isForward: true,
      };
    case "DECREASE_FORM_STEP":
      return {
        step: state.step - 1,
        isForward: false,
      };
    case "RESET_FORM_STEP":
      return initState;
    default:
      return state;
  }
};
export default formStepReducer;
