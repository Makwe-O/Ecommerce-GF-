import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import * as cartActions from "../../actions/cart/cartAction";

const CartIcon = ({ toggleCartIcon, cartItems }) => {
  return (
    <div
      className="shopping-cart"
      onClick={() => {
        toggleCartIcon();
      }}
    >
      <ShoppingIcon />
      <span className="item-count">1</span>
    </div>
  );
};

const mapStateToProps = state => {
  const {
    cartReducer: { cartItems }
  } = state;
  return cartItems;
};

const mapDispatchToProps = {
  toggleCartIcon: cartActions.toggleCartIcon
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
