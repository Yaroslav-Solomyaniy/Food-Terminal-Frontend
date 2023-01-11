import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Alert from '@mui/material/Alert/Alert';
import { AlertTitle } from '@mui/material';

export interface ISignUpParams {
  email: string;
  password: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  surName: string;
}

export interface ISignUpData {
  token: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    surName: string;
    isBanned: boolean;
    banReason: string;
    roles: string[];
  };
}

export interface IUseSignUp {
  data: ISignUpData | null;
  signUp: (params: ISignUpParams) => void;
}

export const useSignUp = (): IUseSignUp => {
  const [data, setData] = useState<ISignUpData | null>(null);

  const signUp = (params: ISignUpParams) => {
    axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signUp`, params, { })
      .then((response: AxiosResponse<ISignUpData | null>) => {
        <AlertTitle>Success</AlertTitle>
      });
  };

  return { data, signUp };
};
