import React from 'react';
import { Organization } from 'Src/models/organization/type';
import { TodoListItem } from '../TodoListItem';

interface TodoListProps {
  items: Array<Organization>;
}

export const TodoListOrg: React.FC<TodoListProps> = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
