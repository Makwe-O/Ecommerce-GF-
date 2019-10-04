import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cartItem/cartItem";
import { createStructuredSelector } from "reselect";
import {
  selectShowCartDropDown,
  selectCartItems
} from "../../selectors/cart/cart";

const CartDropDown = ({ toggleCart, cartItems }) => {
  return (
    <div className={`cart-dropdown ${toggleCart ? "" : "hidden"}`}>
      {cartItems.length !== 0 ? (
        <div className="cart-item" id="style-2">
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} itemDetails={cartItem} />
          ))}
        </div>
      ) : (
        <div className="text-center">No items are in the cart yet </div>
      )}
      <div className="text-center mt-3">
        <Link to="/cart" className="btn-secondary">
          Checkout
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  toggleCart: selectShowCartDropDown,
  cartItems: selectCartItems
});

export default connect(
  mapStateToProps,
  null
)(CartDropDown);
