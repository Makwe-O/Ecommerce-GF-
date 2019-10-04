import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import * as cartActions from "../../actions/cart/cartAction";
import { selectCartItemsCount } from "../../selectors/cart/cart";

const CartIcon = ({ toggleCartIcon, itemCount }) => {
  return (
    <div
      className="shopping-cart"
      onClick={() => {
        toggleCartIcon();
      }}
    >
      <ShoppingIcon />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = {
  toggleCartIcon: cartActions.toggleCartIcon
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
