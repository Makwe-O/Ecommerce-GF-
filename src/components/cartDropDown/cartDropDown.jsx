import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CartDropDown = ({ showCartDropDown }) => {
  return (
    <div className={`cart-dropdown ${showCartDropDown ? "" : "hidden"}`}>
      <div className="cart-item"></div>
      <Link to="/cart" className="btn-secondary">
        Checkout
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  const {
    cartReducer: { showCartDropDown }
  } = state;

  return { showCartDropDown };
};

export default connect(
  mapStateToProps,
  null
)(CartDropDown);
