import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

interface IButton {
  children: React.ReactNode;
  nameClass?: string;
  onClick: (e: React.FormEvent | undefined) => void;
  disabled?: boolean;
  isImg?: boolean;
}

const Button = ({
  children,
  onClick,
  nameClass,
  disabled,
  isImg,
}: IButton): JSX.Element => (
  <button
    className={clsx(isImg ? styles.button_img : styles.button, nameClass)}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.defaultProps = {
  nameClass: '',
  type: 'button',
  disabled: false,
  isImg: false,
};

export default Button;
