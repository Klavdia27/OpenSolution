import { ChangeEventHandler, useCallback, useState } from 'react';

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

  const [items, setItems] = useState([
    { id: 1, name: 'namefasd', address: 'Minsk', inn: '53541', complete: true },
    { id: 2, name: 'sfera', address: 'Minsk', inn: '45471', complete: true },
    { id: 3, name: 'strekoza', address: 'Minsk', inn: '87171', complete: false },
  ]);

  const addItem = useCallback(() => {
    const item = {
      id: 1 + Math.max(0, ...items.map((elem) => elem.id)),
      name: nameOrgTodo,
      address: addressOrgTodo,
      inn: innOrgTodo,
      complete: false,
    };
    setItems([...items, item]);
  }, [items, nameOrgTodo, addressOrgTodo, innOrgTodo]);

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
