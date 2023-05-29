import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Api } from '../../utils/Api';
import Login from '.';

jest.mock('../../utils/Api');
jest.mock('../../utils/LocalStorage');
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('logs in successfully', async () => {
    render(<Login />);

    const usernameInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(Api.post).toHaveBeenCalledWith({
        endpoint: 'auth',
        payload: {
          username: 'test@example.com',
          password: 'password123',
        },
      });
    });
  });

  test('displays error message when login fails', async () => {
    const errorResponse = {
      response: {
        data: {
          message: 'Invalid credentials',
        },
      },
    };
    Api.post= jest.fn().mockRejectedValue(errorResponse);

    render(<Login />);

    const usernameInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(
        screen.getByText('An unexpected error occurred!')
      ).toBeInTheDocument();
    });
  });

  test('displays generic error message when an unexpected error occurs', async () => {
    Api.post= jest.fn().mockRejectedValue(new Error('An unexpected error occurred'));

    render(<Login />);

    const usernameInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(
        screen.getByText(/unexpected error occurred/i)
      ).toBeInTheDocument();
    });
  });
});
