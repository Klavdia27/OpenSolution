import React from 'react';
import { TodoListItem } from './TodoListItem';

type Todo = {
  // id: number;
  text: string;
  // address: string;
  // INN: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoListOrg: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
};
