import { handleDuplicatesInCart } from "../../utilities/cart/cart";
const INITIAL_STATE = {
  showCartDropDown: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "TOGGLE_CART_ICON":
      return {
        ...state,
        showCartDropDown: !state.showCartDropDown
      };
    case "ADD_ITEM_SUCCESS":
      return {
        ...state,
        cartItems: handleDuplicatesInCart(state.cartItems, payload.cartItem)
      };

    default:
      return state;
  }
};

export default cartReducer;
