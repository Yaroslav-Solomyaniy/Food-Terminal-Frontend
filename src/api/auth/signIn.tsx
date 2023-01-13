import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Message } from '../../hooks/Message';

export interface ISignInParams {
  email: string;
  password: string;
}

export interface IUserData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  surName: string;
  isBanned: boolean;
  banReason: string;
  roles: string[];
}

export interface ISignInData {
  token: string;
  user: IUserData;
}

export interface IUseSignIn {
  data: ISignInData | null;
  signIn: (params: ISignInParams) => void;
}

export const useSignIn = (): IUseSignIn => {
  const [data, setData] = useState<ISignInData | null>(null);

  const signIn = (params: ISignInParams) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/signIn`, params)
      .then((response: AxiosResponse<ISignInData | null>) => {
        setData(response.data);
      })
      .catch((e) => {
        Message(e.response.data.message, 'error');
      });
  };

  return { data, signIn };
};
