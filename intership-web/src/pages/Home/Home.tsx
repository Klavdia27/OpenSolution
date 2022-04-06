import React, { useCallback, useState } from 'react';
import cs from 'classnames';
import { useAppDispatch } from 'Src/hooks';
import { doLogout } from 'Src/models/identity/slice';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import { TodoListOrg } from './TodoListOrg';

import styles from './styles.module.scss';
import icon from './assets/icon-auth.png';

type Todo = {
  id: number;
  name: string;
  address: string;
  inn: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;

interface TodoListProps {
  items: Array<Todo>;
  todos: Array<Todo>;
}

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(doLogout());
  }, [dispatch]);

  const [nameOrgTodo, setNameOrgTodo] = useState<string>('');
  const [addressOrgTodo, setAddressOrgTodo] = useState<string>('');
  const [innOrgTodo, setInnOrgTodo] = useState<string>('');

  const [items, setItems] = useState([
    { id: 1, name: 'namefasd', address: 'Minsk', inn: '53541', complete: true },
    { id: 2, name: 'sfera', address: 'Minsk', inn: '45471', complete: true },
    { id: 3, name: 'sfrsra', address: 'Minsk', inn: '87171', complete: false },
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

  return (
    <div>
      <div>
        <footer className={cs(styles.footer)}>
          <img className={cs(styles.icon)} src={icon} alt="icon-auth" />
          <Button className={cs(styles.button_footer, styles.button)} onClick={handleLogout}>
            Logout
          </Button>
        </footer>
        <div className={cs(styles.org)}>
          <div className={cs(styles.btns)}>
            <Button className={cs(styles.button_back, styles.button)}>Back</Button>
            <Button className={cs(styles.button_add_org, styles.button)}>Add Organization</Button>
          </div>
          <div className={cs(styles.table)}>
            <div className={cs(styles.table_ID)}>ID</div>
            <div className={cs(styles.table_name)}>name</div>
            <div className={cs(styles.table_address)}>address</div>
            <div className={cs(styles.table_inn)}>INN</div>
            <div className={cs(styles.table_action)}>Actions</div>
          </div>
          <TodoListOrg items={items} />
        </div>
      </div>
      <form className={cs(styles.form_addtodo)}>
        <Input value={nameOrgTodo} name="nameOrgTodo" type="text" onChange={handleChangeOrgName} />
        <Input
          value={addressOrgTodo}
          name="addressOrgTodo"
          type="text"
          onChange={handleChangeOrgAddress}
        />
        <Input value={innOrgTodo} name="innOrgTodo" type="text" onChange={handleChangeOrgInn} />
        <Button onClick={handleSubmit} className={cs(styles.btn_addtodo)}>
          Add Todo
        </Button>
      </form>
    </div>
  );
};
