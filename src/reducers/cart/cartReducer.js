const INITIAL_STATE = {
  showCartDropDown: false
};

const cartReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case "TOGGLE_CART_ICON":
      return {
        ...state,
        showCartDropDown: !state.showCartDropDown
      };

    default:
      return state;
  }
};

export default cartReducer;
