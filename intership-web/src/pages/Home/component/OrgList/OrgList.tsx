import React from 'react';
import { Organization } from 'Src/models/organization/type';
import { OrgListItem } from '../OrgListItem';

interface OrgListProps {
  items: Array<Organization>;
}

export const OrgList: React.FC<OrgListProps> = ({ items }) => {
  return <ul>{items && items.map((todo) => <OrgListItem key={todo.id} todo={todo} />)}</ul>;
};
