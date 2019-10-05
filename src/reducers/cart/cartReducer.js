import {
  handleDuplicatesInCart,
  removeDuplicatesInCart
} from '../../utilities/cart/cart';
const INITIAL_STATE = {
  showCartDropDown: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_CART_ICON':
      return {
        ...state,
        showCartDropDown: !state.showCartDropDown
      };
    case 'ADD_ITEM_SUCCESS':
      return {
        ...state,
        cartItems: handleDuplicatesInCart(state.cartItems, payload.cartItem)
      };
    case 'REMOVE_ITEM_SUCCESS':
      const newCart = state.cartItems.filter(
        cartItem => cartItem.id !== payload.cartItem.id
      );
      return {
        ...state,
        cartItems: [...newCart]
      };

    case 'SUBTRACT_QUANTITY_SUCESS':
      console.log(
        'present',
        removeDuplicatesInCart(state.cartItems, payload.cartItem)
      );
      return {
        ...state,
        cartItems: removeDuplicatesInCart(state.cartItems, payload.cartItem)
      };

    default:
      return state;
  }
};

export default cartReducer;
