import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import StripeApiKey from '../../config/stripe';
import { toast } from 'react-toastify';

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const onToken = token => {
    toast.success('Payment Successful. Thanks for giving us your money', {
      position: toast.POSITION.TOP_CENTER,
      className: 'home-background'
    });
  };
  return (
    <StripeCheckout
      class='payButton'
      label='Pay Now with Stripe'
      name='Hat Attack'
      billingAddress
      shippingAddress
      image='https://res.cloudinary.com/dnavbc7ny/image/upload/v1571607872/ecommerce/undraw_plain_credit_card_c8b8.svg'
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel='Give us your money'
      token={onToken}
      stripeKey={StripeApiKey}
    />
  );
};

export default StripeCheckoutButton;
