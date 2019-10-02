import React from "react";
import { connect } from "react-redux";
import * as cartActions from "../../actions/cart/cartAction";
const Card = ({ cardData, addItemToCart }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${cardData.image})`
      }}
      className="card text-center home-card"
    >
      <div className="card-body home-card-body">
        <h6 className="card-title">{cardData.name}</h6>
        <h6 className="card-title">${cardData.price}</h6>
        <button
          to={`/${cardData.url}`}
          className="btn btn-secondary btn-small"
          onClick={() => addItemToCart(cardData)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  addItemToCart: cartActions.addItemToCart
};
export default connect(
  null,
  mapDispatchToProps
)(Card);
