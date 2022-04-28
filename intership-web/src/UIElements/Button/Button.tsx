import React, { ButtonHTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './styles.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary';
  type?: 'submit' | 'button';
};

export const Button: React.FC<Props> = ({ children, variant = 'primary', ...rest }) => {
  return (
    <button className={cs(styles.btn, styles[variant], 'w-96')} type="button" {...rest}>
      {children}
    </button>
  );
};
