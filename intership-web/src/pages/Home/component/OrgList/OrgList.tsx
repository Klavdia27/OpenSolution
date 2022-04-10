import React from 'react';
import { Organization } from 'Src/models/organization/type';
import { OrgListItem } from '../OrgListItem';

interface OrgListProps {
  items: Array<Organization>;
}

export const OrgList: React.FC<OrgListProps> = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map((todo) => {
        return <OrgListItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
