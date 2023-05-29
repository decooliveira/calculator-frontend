import { Validator } from './Validator';

describe('Validator', () => {
  test('checks if a username is valid', () => {
    // Valid usernames
    expect(Validator.isValidUsername('test@example.com')).toBe(true);
    expect(Validator.isValidUsername('john.doe@example.co.uk')).toBe(true);
    expect(Validator.isValidUsername('user123@domain.com')).toBe(true);

    // Invalid usernames
    expect(Validator.isValidUsername('')).toBe(false);
    expect(Validator.isValidUsername('invalid-email')).toBe(false);
    expect(Validator.isValidUsername('username@invalid')).toBe(false);
    expect(Validator.isValidUsername('user@example.')).toBe(false);
  });

  test('checks if a password is valid', () => {
    // Valid passwords
    expect(Validator.isValidPassword('pass')).toBe(true);
    expect(Validator.isValidPassword('securePassword')).toBe(true);

    // Invalid passwords
    expect(Validator.isValidPassword('')).toBe(false);
    expect(Validator.isValidPassword('123')).toBe(false);
  });
});
