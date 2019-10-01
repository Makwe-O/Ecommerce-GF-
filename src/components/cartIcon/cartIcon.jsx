import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import * as cartActions from "../../actions/cart/cartAction";

const CartIcon = ({ toggleCartIcon }) => {
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

const mapDispatchToProps = {
  toggleCartIcon: cartActions.toggleCartIcon
};
export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
