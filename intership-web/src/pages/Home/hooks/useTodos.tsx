import { ChangeEventHandler, useCallback, useState } from 'react';
import { useAppDispatch } from 'Src/hooks';
import { addOrg } from 'Src/models/organization/slice';

type Props = {
  anyProp?: any;
};

type Todo = {
  id: number;
  name: string;
  address: string;
  inn: string;
  complete: boolean;
};

export const useTodos = (props: Props) => {
  const [nameOrgTodo, setNameOrgTodo] = useState<string>('');
  const [addressOrgTodo, setAddressOrgTodo] = useState<string>('');
  const [innOrgTodo, setInnOrgTodo] = useState<string>('');
  const dispatch = useAppDispatch();

  const addItem = useCallback(() => {
    const item = {
      name: nameOrgTodo,
      address: addressOrgTodo,
      INN: innOrgTodo,
    };
    dispatch(addOrg({ ...item }));
  }, [nameOrgTodo, addressOrgTodo, innOrgTodo, dispatch]);

  const handleChangeOrgName = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setNameOrgTodo(value);
    },
    [],
  );

  const handleChangeOrgAddress = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setAddressOrgTodo(value);
    },
    [],
  );

  const handleChangeOrgInn = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setInnOrgTodo(value);
    },
    [],
  );

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem();
  };
  return {
    handleChangeOrgName,
    handleChangeOrgAddress,
    handleChangeOrgInn,
    handleSubmit,
    nameOrgTodo,
    addressOrgTodo,
    innOrgTodo,
  };
};
