import React from 'react';

import { GroupContainer, FormInputContainer, FromInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FromInputLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </FromInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
