import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utilities/firebase/firebase";
import { connect } from "react-redux";

import CartIcon from "../cartIcon/cartIcon";
import CartDropDown from "../cartDropDown/cartDropDown";

const Header = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand" href="#home">
        Ecommerce
      </Link>

      <ul className="">
        <li>
          <Link to="/shop" class="btn btn-secondary">
            Shop
          </Link>
        </li>
        {currentUser ? (
          <>
            <li>
              <Link to="/contact" class="btn btn-secondary">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => auth.signOut()}
                class="btn btn-secondary"
              >
                Sign Out
              </Link>
            </li>
            <li>
              <Link className="shopping-cart">
                <CartIcon />
              </Link>
            </li>
            <CartDropDown />
          </>
        ) : (
          <>
            <li>
              <Link to="/signup" class="btn btn-secondary">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/signin" class="btn btn-secondary">
                Sign In
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  const {
    userReducer: { currentUser }
  } = state;
  return { currentUser };
};

export default connect(mapStateToProps)(Header);
