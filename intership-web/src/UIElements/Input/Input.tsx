import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { InputText } from './components/InputText';

type Props = {
  type: HTMLInputTypeAttribute;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ type, ...rest }) => {
  switch (type) {
    case 'password':
      return <InputText type="password" {...rest} />;
    case 'text':
      return <InputText type="text" {...rest} />;
    case 'number':
      return <InputText type="number" {...rest} />;
    default:
      return null;
  }
};
