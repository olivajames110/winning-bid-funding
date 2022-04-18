export const increaseFormStep = (data) => {
  return {
    type: "INCREASE_FORM_STEP",
    payload: data,
  };
};

export const decreaseFormStep = (data) => {
  return {
    type: "DECREASE_FORM_STEP",
    payload: data,
  };
};

export const resetFormStep = () => {
  return {
    type: "RESET_FORM_STEP",
  };
};
