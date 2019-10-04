import React from 'react';
const CheckOutItem = ({ cartItem: { image, name, quantity, price } }) => {
  return (
    <tr>
      <th>
        <img src={image} alt='item' />
      </th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>X</td>
    </tr>
  );
};

export default CheckOutItem;
