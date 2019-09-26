import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
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
      </ul>
    </nav>
  );
};

export default Header;
