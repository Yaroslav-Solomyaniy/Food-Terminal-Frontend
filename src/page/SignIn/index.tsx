import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Panda from '../../components/Panda';

import styles from './index.module.scss';

interface ISignInParams {
  email: string;
  password: string;
}

const SignIn = () => {
  const [loginData, setLoginData] = useState<ISignInParams>({
    email: '',
    password: '',
  });

  return (
    <div className={styles.login}>
      <div className={styles.login_inner}>
        <Title />
        <form className={styles.form}>
          <Input
            type="text"
            onChange={(e) => {
              setLoginData({ ...loginData, email: e.target.value });
            }}
            value={loginData.email}
            placeholder="Електрона адреса"
            nameClass={styles.input_login}
          />
          <Input
            type="Password"
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
            value={loginData.password}
            placeholder="Пароль"
            nameClass={styles.input_password}
          />

          <Button
            onClick={() => Navigate({ to: '/menu' })}
            nameClass={styles.submit_button}
          >
            Увійти
          </Button>
          <div className={styles.signUp}>
            <div className={styles.signUp__title}>Не є клієнтом системи?</div>
            <Link to="/signUp" className={styles.signUp__link}>
              Зареєструйтесь!
            </Link>
          </div>
        </form>
      </div>
      <Panda />
    </div>
  );
};

export default SignIn;
