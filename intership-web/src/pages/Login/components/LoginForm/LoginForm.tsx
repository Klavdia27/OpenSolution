import React from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import iconAuth from '../../assets/icon-auth.png';

import styles from './styles.module.scss';

interface LoginFormProps {
  handleChangeLogin: (event: React.FormEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isValid: boolean;
  isWasPressed: boolean;
  login: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  handleChangeLogin,
  handleChangePassword,
  handleSubmit,
  isValid,
  isWasPressed,
  login,
  password,
}) => {
  return (
    <div className="m-auto text-center">
      <div className="mb-12">
        <div>
          <img src={iconAuth} alt="icon-auth" />
        </div>
        <div className="text-2xl">Please sign in</div>
      </div>
      <form className={cs(styles.form, 'flex flex-col align-center space-y-4 w-96')}>
        <div>
          <Input value={login} name="login" type="text" onChange={handleChangeLogin} />
        </div>
        <div>
          <Input value={password} name="password" type="password" onChange={handleChangePassword} />
        </div>
        <div className={cs(styles.errorWrapper, { [styles.show]: !isValid && isWasPressed })}>
          <div className={cs(styles.error, 'w-full')}>login details errors try again.</div>
        </div>
        <div>
          <Button onClick={handleSubmit}>Sign In</Button>
        </div>
      </form>
      <div className="mt-12">2020-2021</div>
    </div>
  );
};
