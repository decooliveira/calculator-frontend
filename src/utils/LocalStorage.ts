export const TOKEN_KEY = 'calculator:v1:token';

class LocalStorageService {
  static save(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key: string): string {
    const value = localStorage.getItem(key) || '';
    if (value) {
      return JSON.parse(value);
    }
    return '';
  }

  static remove(key: string): void {
    localStorage.removeItem(key);
  }
}

export { LocalStorageService };
