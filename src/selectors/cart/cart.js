import { createSelector } from 'reselect';

const selectCart = state => state.cartReducer;

export const selectCartItems = createSelector(
  [selectCart],
  cartReducer => cartReducer.cartItems
);

export const selectShowCartDropDown = createSelector(
  [selectCart],
  cartReducer => cartReducer.showCartDropDown
);

export const selectCartItemTotalPrice = createSelector(
  [selectCart],
  cartReducer => {
    return cartReducer.cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
  }
);

export const selectCartItemsCount = createSelector(
  [selectCart],
  cartReducer => {
    return cartReducer.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
  }
);
