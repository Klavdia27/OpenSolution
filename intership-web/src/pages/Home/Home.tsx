import React, { useCallback, useState } from 'react';
import { useAppDispatch } from 'Src/hooks';
import { doLogout } from 'Src/models/identity/slice';
import { Button } from 'Common/UI/Button';

import cs from 'classnames';
import styles from './styles.module.scss';

import icon from './assets/icon-auth.png';
import { TodoListOrg } from './TodoListOrg';
import { AddTodoForm } from './AddTodoForm';

type Todo = {
  // id: number;
  name: string;
  address: string;
  INN: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

// const initialTodos: Array<Todo> = [
//   { id: 1, name: 'namefasd', address: 'Minsk', INN: '183744854', complete: true },
//   { id: 2, name: 'sfera', address: 'Minsk', INN: '452744854', complete: true },
//   { id: 3, name: 'logica', address: 'Brest', INN: '23744854', complete: false },
// ];
const initialTodos: Array<Todo> = [
  { name: 'namefasd', address: 'Minsk', INN: '183744854', complete: true },
  { name: 'sfera', address: 'Minsk', INN: '1823444854', complete: true },
  { name: 'sfrsra', address: 'Minsk', INN: '134644854', complete: false },
];

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(doLogout());
  }, [dispatch]);

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, { name: newTodo, address: newTodo, INN: newTodo, complete: false }]);
  };

  return (
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
        <TodoListOrg todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};
