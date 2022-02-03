import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { createCharge } from '../../opennode/opennode.utils';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total, currentUser, history }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: {total} sats</div>
    <div className='buttons-container'>
      {currentUser ? (
        <div>
          <div className='button'>
            <CustomButton onClick={() => createCharge(total, cartItems, currentUser)}>
              Pay with bitcoin
            </CustomButton>
          </div>
          {/* <div className='button'>
            <StripeCheckoutButton className='stripe' total={total} />
          </div> */}
        </div>
      ) : (
        <div className='button'>
          <CustomButton onClick={() => history.push('/signin')}>
            Sign in to checkout
          </CustomButton>
        </div>
      )}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
