import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from './index';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
test('renders the Signup component', () => {
  render(<Signup />);

  // Assert that the Signup component renders without errors
  expect(screen.getByText('Create account')).toBeInTheDocument();
});

test('validates e-mail address', async () => {
  render(<Signup />);

  // Select the form inputs and submit button
  const usernameInput = screen.getByPlaceholderText('email');
  const passwordInput = screen.getByPlaceholderText('password');
  const confirmPasswordInput = screen.getByPlaceholderText('confirm password');
  const signupButton = screen.getByText('Sign up');

  // Fill in the form inputs with invalid values and submit the form
  fireEvent.change(usernameInput, { target: { value: 'invalid-email' } });
  fireEvent.change(passwordInput, { target: { value: 'abc' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  fireEvent.click(signupButton);

  // Assert that the error messages are displayed
  const errorElements = await screen.queryAllByText(
    'Please enter a valid email address'
  );
  expect(
    screen.queryByText('Please enter a valid email address')
  ).toBeInTheDocument();
  expect(errorElements.length).toBeGreaterThan(0);
});

test('validates password length', async () => {
  render(<Signup />);

  // Select the form inputs and submit button
  const usernameInput = screen.getByPlaceholderText('email');
  const passwordInput = screen.getByPlaceholderText('password');
  const confirmPasswordInput = screen.getByPlaceholderText('confirm password');
  const signupButton = screen.getByText('Sign up');

  // Fill in the form inputs with invalid values and submit the form
  fireEvent.change(usernameInput, { target: { value: 'valid@mail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'abc' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  fireEvent.click(signupButton);

  // Assert that the error messages are displayed
  const errorElements2 = await screen.queryAllByText(
    'Password should have at least 4 characters'
  );
  expect(
    screen.queryByText('Password should have at least 4 characters')
  ).toBeInTheDocument();
  expect(errorElements2.length).toBeGreaterThan(0);
});

test('validates password that do not match', async () => {
  render(<Signup />);

  // Select the form inputs and submit button
  const usernameInput = screen.getByPlaceholderText('email');
  const passwordInput = screen.getByPlaceholderText('password');
  const confirmPasswordInput = screen.getByPlaceholderText('confirm password');
  const signupButton = screen.getByText('Sign up');

  // Fill in the form inputs with invalid values and submit the form
  fireEvent.change(usernameInput, { target: { value: 'valid@mail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'abcd' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  fireEvent.click(signupButton);

  // Wait for the error message to appear
  await waitFor(() =>
    expect(screen.queryByText('Passwords do not match')).toBeInTheDocument()
  );
});
