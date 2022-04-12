import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearOrgs } from 'Src/models/organization/slice';
import { fetchDiv } from 'Src/models/division/slice';
import { IdOrg } from 'Src/models/organization/type';
import cs from 'classnames';
import styles from './styles.module.scss';
import iconNext from './assets/next.png';
import iconChange from './assets/change.png';
import iconDelete from './assets/delete.png';
import { useAppDispatch } from '../../../../hooks';
import { useOrgs } from '../../hooks/useOrgs';

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const nextPage = useCallback(
    (id: IdOrg) => (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(id);
      navigate(`/division/?id=${id.id}`);
      dispatch(clearOrgs());
    },
    [navigate, dispatch],
  );

  const { deleteOrg } = useOrgs({});

  return (
    <li>
      <div className={cs(styles.item_todo)}>
        <div className={cs(styles.table_ID)}>{todo.id}</div>
        <div className={cs(styles.table_name)}>{todo.name}</div>
        <div className={cs(styles.table_address)}>{todo.address}</div>
        <div className={cs(styles.table_inn)}>{todo.INN}</div>
        <div className={cs(styles.actions)}>
          <button type="button" className={cs(styles.btn_next)} onClick={nextPage({ id: todo.id })}>
            <img className={cs(styles.icon_action)} src={iconNext} alt="icon-next" />
          </button>
          <img className={cs(styles.icon_action)} src={iconChange} alt="icon-change" />
          <button
            type="button"
            className={cs(styles.btn_delete)}
            onClick={deleteOrg({ id: todo.id })}
          >
            <img className={cs(styles.icon_action)} src={iconDelete} alt="icon-delete" />
          </button>
        </div>
      </div>
    </li>
  );
};
