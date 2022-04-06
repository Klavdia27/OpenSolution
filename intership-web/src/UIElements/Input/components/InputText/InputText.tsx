import React, { InputHTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './styles.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  someProp?: any;
};

export const InputText: React.FC<Props> = ({ value, ...rest }) => {
  return <input className={cs(styles.input)} value={value} {...rest} />;
};
