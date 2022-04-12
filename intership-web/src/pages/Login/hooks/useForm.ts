import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { doLogin } from 'Src/models/identity/slice';

// определяем максимальную длину введеной строки в логин и пароль.
const maxLength = (str: string) => str.length > 0;

const validators = {
  login: [Boolean, maxLength],
  password: [Boolean],
};

export const useForm = () => {
  const dispatch = useAppDispatch();
  const identity = useAppSelector((state) => state.identity);
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValidForm, setValidForm] = useState<boolean>(false);
  const [isWasPressed, setWasPressed] = useState<boolean>(false);

  const isValidLogin = useMemo(() => validators.login.every((fn) => fn(login)), [login]);
  const isValidPassword = useMemo(
    () => validators.password.every((fn) => fn(password)),
    [password],
  );

  useMemo(() => setValidForm(isValidLogin && isValidPassword), [isValidLogin, isValidPassword]);

  // функция которая вызывается при вводе в поле логина
  const handleChangeLogin = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setLogin(value);
      setWasPressed(false);
    },
    [],
  );

  // функция которая вызывается при вводе в поле пароля
  const handleChangePassword = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setPassword(value);
      setWasPressed(false);
    },
    [],
  );
  // функция которая вызывается при вводе нажатии на кнопку "Sign In"
  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      setWasPressed(true);

      if (isValidLogin && isValidPassword) {
        setValidForm(true);
        dispatch(doLogin({ login, password }));
        // dispatch(namePage({ namePage: 'organization' }));
      }
    },
    [login, password, isValidLogin, isValidPassword, dispatch],
  );

  useEffect(() => {
    if (identity.isLogin) {
      navigate('/organization');
    }
  }, [identity.isLogin, navigate]);

  return {
    login,
    password,
    isValidLogin,
    isValidPassword,
    isValidForm,
    isWasPressed,
    handleChangeLogin,
    handleChangePassword,
    handleSubmit,
  };
};
