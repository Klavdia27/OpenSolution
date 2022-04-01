import React, { useCallback, useMemo, useState } from 'react';

const maxLength = (str: string) => str.length > 4;
const validators = {
  login: [Boolean, maxLength],
  password: [Boolean],
};

export const useForm = () => {
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

  const handleChangeLogin = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setLogin(value);
      setWasPressed(false);
    },
    [],
  );
  const handleChangePassword = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setPassword(value);
      setWasPressed(false);
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      setWasPressed(true);

      if (isValidLogin && isValidPassword) {
        console.table({
          login,
          password,
        });

        setValidForm(true);
      }
    },
    [login, password, isValidLogin, isValidPassword],
  );

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
