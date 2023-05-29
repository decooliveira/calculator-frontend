import React, { useState } from 'react';
import { AxiosError } from 'axios';
import { PasswordInput } from '../../components/PasswordInput';
import { SubmitButton } from '../../components/SubmitButton';
import { UsernameInput } from '../../components/UsernameInput';
import {
  Container,
  Error,
  ErrorMessage,
  NavLink,
  SignupForm,
  Title,
} from './styles';
import { Validator } from '../../utils/Validator';
import { LocalStorageService, TOKEN_KEY } from '../../utils/LocalStorage';
import { Api } from '../../utils/Api';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export const Login = () => {
  const navigate = useNavigate();

  const { handleUser } = useAuthContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const [showError, setShowError] = useState(false);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleErrorMessage = (message: string) => {
    setError(message);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setError('');
    }, 5000);
  };

  const handleLogin = async () => {
    // Validating username and password
    if (!username || !password) {
      handleErrorMessage('Please provide username and password!');
      return;
    }

    // Validating username format
    if (!Validator.isValidUsername(username)) {
      handleErrorMessage('Please provide a valid email address!');
      return;
    }

    // Validating password length
    if (!Validator.isValidPassword(password)) {
      handleErrorMessage('Password must be at least 4 characters long!');
      return;
    }

    try {
      const response = await Api.post({
        endpoint: 'auth',
        payload: {
          username,
          password,
        },
      });

      if (response.status === 200) {
        const { token } = response.data;
        LocalStorageService.save(TOKEN_KEY, token);
        handleUser({ token: token });
        navigate('/calculator');
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { message } = error.response.data;
        setError(message);
        setShowError(true);
      } else {
        setError('An unexpected error occurred!');
        setShowError(true);
      }
    }
  };

  return (
    <Container>
      <SignupForm>
        <Title>Calculator</Title>
        <Error>{showError && <ErrorMessage>{error}</ErrorMessage>}</Error>
        <UsernameInput
          placeholder={'email'}
          value={username}
          onChange={handleUsername}
        />
        <PasswordInput
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <SubmitButton onClick={handleLogin}>Login</SubmitButton>
        <NavLink href="/signup">Create your account</NavLink>
      </SignupForm>
    </Container>
  );
};

export default Login;
