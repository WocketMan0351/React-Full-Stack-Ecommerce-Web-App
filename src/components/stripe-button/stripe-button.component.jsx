import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ total }) => {
  const priceForStripe = total * 100;
  // CHANGE PUBLISHABLE KEY

  const publishableKey_LIVE =
    'pk_live_51KDyEBFfo7NcXh7mEDXFn15s5dFS0gjJzlm4sQe9TxqWkrKFUHOUOS9KBj6N3ouaI6nhOy062jU7Gok3Egiuvhlt009eLC2RH9';

  const publishableKey_TEST =
    'pk_test_51KDyEBFfo7NcXh7mjJrneV3JAabvnXj2Ibfrji8UlvqiI3urNvs3jZzgBam0ma4X8anIO6A2Fnbx3BEHWBLs7a3I00DmeCx5qZ';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      name='CRWN Clothing'
      label='Pay with fiat'
      description={`Your total is $${total}`}
      amount={priceForStripe}
      currency='USD'
      panelLabel='Pay now'
      shippingAddress
      billingAddress
      allowRememberMe
      token={onToken}
      stripeKey={publishableKey_TEST}
    />
  );
};

export default StripeCheckoutButton;
