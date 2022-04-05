import React from 'react';

import cs from 'classnames';
import styles from './styles.module.scss';

type Todo = {
  //   id: number;
  text: string;
  //  address: string;
  //   INN: string;
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
      <label className={cs(styles.complete ? 'complete' : undefined)}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  );
};
