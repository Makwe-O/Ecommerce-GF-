import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../actions/cart/cartAction';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const CheckOutItem = ({
  cartItem,
  removeItemFromCart,
  addItemToCart,
  subtractQuantityFromItemInCart
}) => {
  const { image, name, quantity, price } = cartItem;
  return (
    <tr>
      <th>
        <img src={image} alt='item' />
      </th>
      <td>{name}</td>
      <td>
        <div className='quantity-container'>
          <span
            onClick={() => subtractQuantityFromItemInCart(cartItem)}
            className='rotate arrow'
          >
            <Arrow />
          </span>
          <span>{quantity}</span>
          <span onClick={() => addItemToCart(cartItem, true)} className='arrow'>
            <Arrow />
          </span>
        </div>
      </td>
      <td>${price}</td>
      <td
        onClick={() => {
          removeItemFromCart(cartItem);
        }}
      >
        <span style={{ cursor: 'pointer' }}>X</span>
      </td>
    </tr>
  );
};
const mapDispatchToProps = {
  removeItemFromCart: cartActions.removeItemFromCart,
  addItemToCart: cartActions.addItemToCart,
  subtractQuantityFromItemInCart: cartActions.subtractQuantityFromItemInCart
};

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
