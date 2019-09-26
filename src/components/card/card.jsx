import React from "react";
import { Link } from "react-router-dom";
const Card = ({ cardData }) => {
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
        <Link to={`/${cardData.url}`} className="btn btn-secondary btn-small">
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

export default Card;
