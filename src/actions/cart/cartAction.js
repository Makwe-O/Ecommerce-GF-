import { toast } from 'react-toastify';
export const toggleCartIcon = () => dispatch => {
  dispatch({
    type: 'TOGGLE_CART_ICON'
  });
};

export const addItemToCart = item => dispatch => {
  try {
    dispatch({
      type: 'ADD_ITEM_SUCCESS',
      payload: { cartItem: item }
    });

    toast.success(`${item.name} has been added to the cart`, {
      position: toast.POSITION.TOP_CENTER,
      className: 'home-background'
    });
  } catch {
    dispatch({
      type: 'ADD_ITEM_FAILURE'
    });
    toast.error(`${item.name} was not added to the cart`, {
      position: toast.POSITION.TOP_CENTER
    });
  }
};

export const removeItemFromCart = item => dispatch => {
  try {
    dispatch({
      type: 'REMOVE_ITEM_SUCCESS',
      payload: { cartItem: item }
    });

    toast.success(`${item.name} has been removed from the cart`, {
      position: toast.POSITION.TOP_CENTER,
      className: 'home-background'
    });
  } catch {
    dispatch({
      type: 'REMOVE_ITEM_FAILURE'
    });
    toast.error(`An error occured`, {
      position: toast.POSITION.TOP_CENTER
    });
  }
};
