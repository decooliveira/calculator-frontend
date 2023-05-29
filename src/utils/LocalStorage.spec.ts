/* eslint-disable @typescript-eslint/no-unused-vars */
import { LocalStorageService } from './LocalStorage';

interface Storage {
  key: string | null;
}
describe('LocalStorageService', () => {
  let localStorageMock: Storage = { key: '' } as Storage;

  beforeEach(() => {
    localStorageMock = {
      key: '',
    } as Storage; // Reset the mock before each test
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((_key: string) => localStorageMock.key),
        setItem: jest.fn((_key: string, value: string) => {
          localStorageMock.key = value;
        }),
        removeItem: jest.fn((_key?: string) => {
          localStorageMock.key = null;
        }),
        clear: jest.fn(() => {
          localStorageMock = {} as { key: string };
        }),
      },
      writable: true,
    });
  });

  test('saves a value to localStorage', () => {
    const key = 'testKey';
    const value = 'testValue';

    LocalStorageService.save(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
    expect(localStorageMock.key).toBe(JSON.stringify(value));
  });

  test('retrieves a value from localStorage', () => {
    const key = 'testKey';
    const value = 'testValue';
    localStorageMock.key = JSON.stringify(value);

    const result = LocalStorageService.get(key);

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(result).toBe(value);
  });

  test('returns an empty string if the value does not exist in localStorage', () => {
    const key = 'nonExistentKey';

    const result = LocalStorageService.get(key);

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(result).toBe('');
  });

  test('removes a value from localStorage', () => {
    const key = 'testKey';
    const value = 'testValue';
    localStorageMock.key = JSON.stringify(value);

    LocalStorageService.remove(key);

    expect(localStorage.removeItem).toHaveBeenCalledWith(key);
    expect(localStorageMock.key).toBeNull();
  });
});
