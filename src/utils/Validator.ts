class Validator {
  static isValidUsername(username: string): boolean {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(username)) {
      return false;
    }
    return true;
  }

  static isValidPassword(password: string): boolean {
    return password.length < 4 ? false : true;
  }
}
export { Validator };
