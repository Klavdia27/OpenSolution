import React, { ChangeEvent, useState } from 'react';

type Todo = {
  text: string;
  // id: number;
  // name: string;
  // address: string;
  // INN: string;
  complete: boolean;
};

interface AddTodoFormProps {
  addTodo: (newTodo: string) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
