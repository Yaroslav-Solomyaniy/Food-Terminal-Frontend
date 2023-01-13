import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Message } from '../../hooks/Message';

export interface ISignUpParams {
  email: string;
  password: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  surName: string;
}

export interface ISignUpData {
  message: 'Ви успішно зареєструвались';
  isSuccesfull: true;
}

export interface IUseSignUp {
  data: ISignUpData | null;
  signUp: (params: ISignUpParams) => void;
}

export const useSignUp = (): IUseSignUp => {
  const [data, setData] = useState<ISignUpData | null>(null);

  const signUp = (params: ISignUpParams) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/signUp`, params)
      .then((response: AxiosResponse<ISignUpData | null>) => {
        setData(response.data);
        Message(response.data?.message || '', 'success');
      })
      .catch((e) => {
        Message(e.response.data.message, 'error');
      });
  };

  return { data, signUp };
};
