import React from 'react';
import cs from 'classnames';
import styles from './styles.module.scss';

import iconNext from './assets/next.png';
import iconChange from './assets/change.png';
import iconDelete from './assets/delete.png';

type OrgType = {
  id: number;
  name: string;
  address: string;
  INN: number | string;
};
interface OrgListItemProps {
  todo: OrgType;
}

export const OrgListItem: React.FC<OrgListItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={cs(styles.complete ? 'complete' : undefined, styles.item_todo)}>
        <div className={cs(styles.table_ID)}>{todo.id}</div>
        <div className={cs(styles.table_name)}>{todo.name}</div>
        <div className={cs(styles.table_address)}>{todo.address}</div>
        <div className={cs(styles.table_inn)}>{todo.INN}</div>
        <div className={cs(styles.actions)}>
          <img className={cs(styles.icon_action)} src={iconNext} alt="icon-next" />
          <img className={cs(styles.icon_action)} src={iconChange} alt="icon-change" />
          <img className={cs(styles.icon_action)} src={iconDelete} alt="icon-delete" />
        </div>
      </label>
    </li>
  );
};
