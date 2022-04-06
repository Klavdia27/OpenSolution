import React from 'react';
import { TodoListItem } from './TodoListItem';

type Todo = {
  id: number;
  name: string;
  address: string;
  inn: string;
  complete: boolean;
};
interface TodoListProps {
  items: Array<Todo>;
}

export const TodoListOrg: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((todo) => {
        return <TodoListItem key={todo.name} todo={todo} />;
      })}
    </ul>
  );
};
