import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../selectors/cart/cart';
import { selectCartItemTotalPrice } from '../../selectors/cart/cart';
import CheckOutItem from '../../components/checkOutItem/checkOutItem';
const CheckOutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className='mt-5 container'>
      {cartItems.length ? (
        <>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Image</th>
                <th scope='col'>Description</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Price</th>
                <th scope='col'>Remove</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </tbody>
          </table>
          <div>
            <h2 className='lead'>Total: ${totalPrice}</h2>
          </div>
        </>
      ) : (
        <div className='mt-5 text-center'>
          It empty here. Please add some sh*t to your cart so I don't display
        </div>
      )}
    </div>
  );
};

const mapStateToprops = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemTotalPrice
});

export default connect(
  mapStateToprops,
  null
)(CheckOutPage);
