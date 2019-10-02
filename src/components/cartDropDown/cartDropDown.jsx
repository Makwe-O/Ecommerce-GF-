import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cartItem/cartItem";

const CartDropDown = ({ showCartDropDown, cartItems }) => {
  return (
    <div className={`cart-dropdown ${showCartDropDown ? "" : "hidden"}`}>
      {cartItems.length !== 0 ? (
        <div className="cart-item" id="style-2">
          {cartItems.map(cartItem => (
            <CartItem itemDetails={cartItem} />
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

const mapStateToProps = state => {
  const {
    cartReducer: { showCartDropDown, cartItems }
  } = state;

  return { showCartDropDown, cartItems };
};

export default connect(
  mapStateToProps,
  null
)(CartDropDown);
