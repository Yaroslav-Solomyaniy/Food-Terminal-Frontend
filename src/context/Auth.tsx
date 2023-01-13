import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUseSignUp, useSignUp } from '../api/auth/signUp';
import { IUserData, IUseSignIn, useSignIn } from '../api/auth/signIn';
import { Message } from '../hooks/Message';

interface IAuthContext {
  signUp: IUseSignUp | null;
  signIn: IUseSignIn | null;
  user: IUserData | null;
  logOut: () => void;
}

const defaultValue: IAuthContext = {
  signUp: null,
  signIn: null,
  user: null,
  logOut: () => undefined,
};

export const authContext = createContext<IAuthContext>(defaultValue);

const getStorageData = (): IUserData | null => {
  const userData: string | null = localStorage.getItem('user') || null;

  if (userData) {
    return JSON.parse(userData);
  }

  return null;
};

const AuthProvider = ({ children }: { children: JSX.Element; }): JSX.Element => {
  const [user, setUser] = useState<IUserData | null>(null);
  const navigate = useNavigate();
  const signUp = useSignUp();
  const signIn = useSignIn();

  useEffect(() => {
    if (signIn.data) {
      Message('Ви успішно авторизувались', 'success');
      sessionStorage.setItem('token', signIn.data.token);
      localStorage.setItem('user', JSON.stringify(signIn.data.user));
      setUser(signIn.data.user);
    }
  }, [signIn.data]);

  useEffect(() => {
    try {
      setUser(getStorageData());
    } catch (error) {
      logOut();
    }
  }, []);

  const logOut = () => {
    setUser(null);
    navigate('/', { replace: true });
    sessionStorage.clear();
    localStorage.clear();
    Message('Ви покинули систему', 'info');
  };

  return (
    <authContext.Provider value={{ signUp, signIn, user, logOut }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const AuthContext = (): IAuthContext => useContext(authContext);
