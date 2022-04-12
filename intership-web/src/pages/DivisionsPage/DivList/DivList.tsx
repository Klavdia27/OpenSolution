import React from 'react';
import { IDivision } from 'Src/models/division/type';
import { DivListItem } from '../DivListItem';

interface DivListProps {
  items: Array<IDivision>;
}

export const DivList: React.FC<DivListProps> = ({ items }) => {
  return <ul>{items && items.map((todo) => <DivListItem key={todo.id} todo={todo} />)}</ul>;
};
