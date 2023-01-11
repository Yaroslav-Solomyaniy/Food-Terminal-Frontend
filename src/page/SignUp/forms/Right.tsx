import React from 'react';
import styles from '../index.module.scss';
import Input from '../../../components/Input';
import { ISignUpParams } from '../../../api/signUp/signUp';

interface IRegisterLeftForm{
  data: ISignUpParams;
  setData: (value: ISignUpParams) => void;
}

const RegisterRightForm = ({ data, setData }:IRegisterLeftForm) => (
  <form className={styles.form}>
    <Input
      type="text"
      onChange={(e) => {
        setData({ ...data, firstName: e.target.value });
      }}
      value={data.firstName}
      placeholder="Ім'я"
      nameClass={styles.input}
    />
    <Input
      type="text"
      onChange={(e) => {
        setData({ ...data, surName: e.target.value });
      }}
      value={data.surName}
      placeholder="По батькові"
      nameClass={styles.input}
    />
    <Input
      type="text"
      onChange={(e) => {
        setData({ ...data, lastName: e.target.value });
      }}
      value={data.lastName}
      placeholder="Фамілія"
      nameClass={styles.input}
    />
    <Input
      type="text"
      onChange={(e) => {
        setData({ ...data, phoneNumber: e.target.value });
      }}
      value={data.phoneNumber}
      placeholder="Номер телефону"
      nameClass={styles.input}
    />
  </form>
);

export default RegisterRightForm;
