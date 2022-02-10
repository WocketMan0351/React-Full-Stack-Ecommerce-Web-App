import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { auth } from '../../firebase/firebase.utils';
import { ButtonsBarContainer, SignInContainer, TitleContainer } from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Signed in successfully');
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
      alert('Invalid username and/or password.');
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <TitleContainer>Already have an account?</TitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit' value='Submit' isBlue>
              Sign In
            </CustomButton>
          </ButtonsBarContainer>{' '}
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
