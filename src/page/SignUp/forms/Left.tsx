import React from 'react';
import clsx from 'clsx';
import styles from '../index.module.scss';
import Input from '../../../components/Input';
import { ISignUpParams } from '../../../api/signUp/signUp';

interface IRegisterLeftForm{
  data: ISignUpParams;
  setData: (value: ISignUpParams) => void;
  confirmPass: string;
  setConfirmPass: (value: string) => void;
}

const RegisterLeftForm = ({ data, setData, setConfirmPass, confirmPass }:IRegisterLeftForm) => (
  <form className={clsx(styles.form, styles.left_form)}>
    <Input
      type="text"
      onChange={(e) => {
        setData({ ...data, email: e.target.value });
      }}
      value={data.email}
      placeholder="Електрона адреса"
      nameClass={styles.input}
    />
    <Input
      type="Password"
      onChange={(e) => {
        setData({ ...data, password: e.target.value });
      }}
      value={data.password}
      placeholder="Пароль"
      nameClass={styles.input}
    />
    <Input
      type="Password"
      onChange={(e) => {
        setConfirmPass(e.target.value);
      }}
      value={confirmPass}
      placeholder="Підтверджуючий пароль"
      nameClass={styles.input}
    />
  </form>
);

export default RegisterLeftForm;
