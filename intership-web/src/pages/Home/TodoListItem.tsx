import React from 'react';

import cs from 'classnames';
import styles from './styles.module.scss';

type Todo = {
  // id: number;
  name: string;
  address: string;
  INN: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={cs(styles.complete ? 'complete' : undefined, styles.item_todo)}>
        <div className={cs(styles.table_ID)}> номер ID</div>
        <div className={cs(styles.table_name)}>{todo.name}</div>
        <div className={cs(styles.table_address)}>{todo.address}</div>
        <div className={cs(styles.table_inn)}>{todo.INN}</div>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
      </label>
    </li>
  );
};
