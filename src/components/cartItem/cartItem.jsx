import React from "react";
const CartItem = ({ itemDetails }) => {
  const { image, name, price, quantity } = itemDetails;
  return (
    <>
      <div className="cart-item-container">
        <img src={image} alt="" />
        <div className="cart-body">
          <div>{name}</div>
          <div>
            {quantity} X ${price}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
