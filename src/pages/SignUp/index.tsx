import React, { useState } from 'react';
import { AxiosError } from 'axios';
import { Container, SignupForm, Title, ErrorMessage } from './styles';
import { UsernameInput } from '../../components/UsernameInput';
import { PasswordInput } from '../../components/PasswordInput';
import { SubmitButton } from '../../components/SubmitButton';
import { Validator } from '../../utils/Validator';
import { LocalStorageService, TOKEN_KEY } from '../../utils/LocalStorage';
import { Api } from '../../utils/Api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleErrorMessage = (message: string) => {
    setError(message);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setError('');
    }, 5000);
  };

  const validateForm = () => {
    if (!username || !password || !confirmPassword) {
      handleErrorMessage('Please fill in all fields');
      return false;
    }

    if (!Validator.isValidUsername(username)) {
      handleErrorMessage('Please enter a valid email address');
      return false;
    }

    if (password.length < 4) {
      handleErrorMessage('Password should have at least 4 characters');
      return false;
    }

    if (password !== confirmPassword) {
      handleErrorMessage('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await Api.post({
        endpoint: 'users',
        payload: {
          username,
          password,
        },
      });

      if (response.status === 201) {
        const { token } = response.data;
        LocalStorageService.save(TOKEN_KEY, token);
        navigate('/');
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { message } = error.response.data;
        handleErrorMessage(message);
      } else {
        handleErrorMessage(
          'An error occurred during signup. Please try again.'
        );
      }
    }
  };

  return (
    <Container>
      <SignupForm>
        <Title>Create account</Title>
        {showError && <ErrorMessage>{error}</ErrorMessage>}
        <UsernameInput
          placeholder="email"
          value={username}
          onChange={handleUsernameChange}
        />
        <PasswordInput
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <PasswordInput
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <SubmitButton onClick={handleSignup}>Sign up</SubmitButton>
      </SignupForm>
    </Container>
  );
};

export default Signup;
