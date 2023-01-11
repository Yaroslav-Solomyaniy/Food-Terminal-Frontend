import React, { ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { Review } from '../SVG';
import Button from '../Button';

interface IInput {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number | undefined;
  placeholder?: string;
  nameClass?: string;
  type?: string;
  pattern?: RegExp;
}

const Input = ({
  placeholder,
  nameClass,
  type,
  onChange,
  value,
  pattern,
}: IInput): JSX.Element => {
  const [checkPassword, setCheckPassword] = useState<boolean>(false);

  const changeCheckPass = () => {
    setCheckPassword(!checkPassword);
  };

  return (
    <div className={styles.input_wrap}>
      <input
        placeholder={placeholder}
        className={clsx(styles.input, nameClass)}
        type={type === 'Password' ? checkPassword ? 'text' : 'Password' : type}
        onChange={(e) => {
          if (pattern) {
            if (pattern.test(e.target.value) || !e.target.value) {
              onChange(e);
            }
          } else {
            onChange(e);
          }
        }}
        value={value}
      />
      {type === 'Password' && (
      <Button onClick={changeCheckPass} nameClass={styles.password__button} isImg><Review /></Button>
      )}
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  nameClass: '',
  type: 'text',
  pattern: '',
};

export default Input;
