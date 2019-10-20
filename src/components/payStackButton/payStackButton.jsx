import React, { useState } from 'react';
import PaystackButton from 'react-paystack';
import { toast } from 'react-toastify';
import payStackApikey from '../../config/paystack';

const PayStackCheckoutButton = ({ price }) => {
  const payStackPrice = price * 36000;
  const [email] = useState('foo@example.com');
  const getReference = () => {
    return '' + Math.floor(Math.random() * 1000000000 + 1);
  };

  const callback = response => {
    toast.success(`Payment Successful. Thanks for giving us your cash`, {
      position: toast.POSITION.TOP_CENTER,
      className: 'home-background'
    });
  };

  const close = () => {
    console.log('Payment closed');
  };
  return (
    <PaystackButton
      text='Pay with PayStack'
      email={email}
      class='payButton'
      callback={callback}
      close={close}
      disabled={false}
      embed={false}
      reference={getReference()}
      amount={parseInt(payStackPrice)}
      paystackkey={payStackApikey}
      tag='button'
    />
  );
};

export default PayStackCheckoutButton;
