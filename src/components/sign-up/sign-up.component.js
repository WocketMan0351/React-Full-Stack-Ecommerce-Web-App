import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props) {
    super();

    this.state = {
      displayName: '',
      email: '',
      address: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, address, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName, address });

      this.setState({
        displayName: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
      alert('There was a problem creating your account. Please try again.');
    }
  };

  render() {
    const { displayName, email, address, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>New account? Welcome!</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            value={displayName}
            onChange={this.handleChange}
            label='First and Last Name'
            required
          />
          <FormInput
            name='email'
            type='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='address'
            type='address'
            value={address}
            onChange={this.handleChange}
            label='Shipping address'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
            autoComplete='new-password'
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <div className='button'>
            <CustomButton type='submit'>Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
