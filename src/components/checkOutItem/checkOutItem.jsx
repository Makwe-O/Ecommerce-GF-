import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../actions/cart/cartAction';
const CheckOutItem = ({ cartItem, removeItemFromCart }) => {
  const { image, name, quantity, price } = cartItem;
  return (
    <tr>
      <th>
        <img src={image} alt='item' />
      </th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td
        onClick={() => {
          removeItemFromCart(cartItem);
        }}
      >
        X
      </td>
    </tr>
  );
};
const mapDispatchToProps = {
  removeItemFromCart: cartActions.removeItemFromCart
};

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
