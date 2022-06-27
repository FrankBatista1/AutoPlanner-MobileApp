import React, {Children, createContext} from 'react';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  uid: string | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  singIn: () => void;
  logOut: () => void;
  removeError: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
//   return <AuthContext.Provider value={{}}>{Children}</AuthContext.Provider>;
};
