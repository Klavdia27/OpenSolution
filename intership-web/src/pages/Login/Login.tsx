import React from 'react';
import { LoginForm } from 'Src/pages/Login/components';
import cs from 'classnames';
import { useForm } from 'Src/pages/Login/hooks';
import styles from './styles.module.scss';

export const LoginPage: React.FC = () => {
  const {
    login,
    password,
    isValidForm,
    handleSubmit,
    handleChangeLogin,
    handleChangePassword,
    isWasPressed,
  } = useForm();

  return (
    <div className={cs(styles.container, 'h-full flex align-center')}>
      <LoginForm
        login={login}
        password={password}
        isValid={isValidForm}
        isWasPressed={isWasPressed}
        handleChangeLogin={handleChangeLogin}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
