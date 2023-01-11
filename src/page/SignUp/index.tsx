import React, { useState } from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';
import GoHome from '../../components/GoBack';
import Panda from '../../components/Panda';
import { AuthContext } from '../../context/Auth';
import styles from './index.module.scss';
import { ISignUpParams } from '../../api/signUp/signUp';
import SignUpLeftForm from './forms/Left';
import SignUpRightForm from './forms/Right';

const initialData:ISignUpParams = {
  email: '',
  password: '',
  phoneNumber: '',
  firstName: '',
  lastName: '',
  surName: '',
};

const SignUp = () => {
  const [userData, setUserData] = useState<ISignUpParams>(initialData);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { signUp } = AuthContext();

  const onSubmit = () => {
    if (confirmPassword === userData.password) {
      signUp?.signUp(userData);
    }
  };

  return (
    <div className={styles.signUp}>
      <GoHome />
      <div className={styles.signUp_inner}>
        <Title />
        <div className={styles.signUp_columns}>
          <SignUpLeftForm data={userData} setData={setUserData} confirmPass={confirmPassword} setConfirmPass={setConfirmPassword} />
          <SignUpRightForm data={userData} setData={setUserData} />
        </div>
        <Button onClick={onSubmit} nameClass={styles.signUp_button}>Зареєструватися</Button>
      </div>
      <Panda />
    </div>
  );
};

export default SignUp;
