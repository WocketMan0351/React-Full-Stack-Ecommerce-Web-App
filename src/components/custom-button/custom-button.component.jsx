import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isBlue, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${isBlue ? 'isBlue' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
