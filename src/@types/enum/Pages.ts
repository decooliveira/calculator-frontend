export enum Pages {
  CALCULATOR = 'calculator',
  RECORDS = 'history',
  CREDITS = 'billing',
  SIGNUP = 'signup',
  LOGIN = 'login',
}

export const pathToPage = (pathname: string): Pages => {
  switch (pathname) {
    case '/calculator':
      return Pages.CALCULATOR;
    case '/history':
      return Pages.RECORDS;
    case '/billing':
      return Pages.CREDITS;
    case '/signup':
      return Pages.SIGNUP;
    case '/login':
      return Pages.LOGIN;
    default:
      return Pages.CALCULATOR;
  }
};
