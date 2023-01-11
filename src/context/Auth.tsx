import { createContext, useContext } from 'react';
import { IUseSignUp, useSignUp } from '../api/signUp/signUp';

interface IAuthContext {
  signUp: IUseSignUp | null;
}

const defaultValue: IAuthContext = {
  signUp: null,
};

export const authContext = createContext<IAuthContext>(defaultValue);

const AuthProvider = ({ children }: { children: JSX.Element; }): JSX.Element => {
  const signUp = useSignUp();

  if (signUp.data) {
    console.log(signUp.data);
  }

  return (
    <authContext.Provider value={{ signUp }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const AuthContext = (): IAuthContext => useContext(authContext);
