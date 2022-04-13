import React from 'react';
import { IEmployee } from 'Src/models/employee/type';
import { EmployeeItem } from '../EmployeeItem';

interface EmployeeListProps {
  items: Array<IEmployee>;
}

export const EmployeeList: React.FC<EmployeeListProps> = ({ items }) => {
  return <ul>{items && items.map((todo) => <EmployeeItem key={todo.id} todo={todo} />)}</ul>;
};
