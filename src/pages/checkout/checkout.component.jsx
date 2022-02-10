import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createCharge } from '../../opennode/opennode.utils';
import {
  ButtonsContainer,
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total, currentUser, history }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>{' '}
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>{' '}
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>{' '}
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>{' '}
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>{' '}
    </CheckoutHeaderContainer>{' '}
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: {total} sats</TotalContainer>
    <ButtonsContainer>
      {currentUser ? (
        <div>
          <div className='button'>
            <CustomButton onClick={() => createCharge(total, cartItems, currentUser)}>
              Pay with bitcoin
            </CustomButton>
          </div>
          <div className='button'>
            <StripeCheckoutButton className='stripe' total={total} />
          </div>
        </div>
      ) : (
        <div className='button'>
          <CustomButton onClick={() => history.push('/signin')}>
            Sign in to checkout
          </CustomButton>
        </div>
      )}
    </ButtonsContainer>{' '}
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
