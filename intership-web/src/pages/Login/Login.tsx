import React from 'react';
import { LoginForm } from 'Src/pages/Login/components';
import { useForm } from 'Src/pages/Login/hooks';
import cs from 'classnames';
import styles from './styles.module.scss';

export const LoginPage: React.FC = () => {
  // c помощью деструктуризации забираем пропсы из useForm
  const {
    login,
    password,
    isValidForm,
    handleSubmit,
    handleChangeLogin,
    handleChangePassword,
    isWasPressed,
  } = useForm();

  // стр 22-30 в компонент LoginForm с помощью пропров отпрокидываем пропсы, которые пришли из useForm
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
