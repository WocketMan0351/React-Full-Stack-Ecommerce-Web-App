import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { removeItem, addItem } from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer src={imageUrl} alt='item' />
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price} sats</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
