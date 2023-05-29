/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { ReactNode, createContext, useState } from 'react';

interface User {
  username?: string;
  token: string;
}

interface AuthData {
  user: User;
  handleUser: (user: User) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthData);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>({} as User);

  function handleUser(user: User): void {
    setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        handleUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return React.useContext(AuthContext);
};
export { AuthContext, AuthContextProvider, useAuthContext };
