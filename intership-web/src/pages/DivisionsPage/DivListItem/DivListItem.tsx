import React, { useCallback, useState } from 'react';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { clearDiv } from 'Src/models/division/slice';
import { IDivision } from 'Src/models/division/type';
import { useAppDispatch } from 'Src/hooks';
import { IdDiv } from 'Src/models/employee/type';
import cs from 'classnames';
import styles from './styles.module.scss';
import iconNext from './assets/next.png';
import iconChange from './assets/change.png';
import iconDelete from './assets/delete.png';

import { DivModalDelete, DivModalEdit } from '../DivModal';

interface DivListItemProps {
  todo: IDivision;
}

export const DivListItem: React.FC<DivListItemProps> = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showModalChange, setShowModalChange] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const nextPage = useCallback(
    (id: IdDiv) => (event: React.MouseEvent<HTMLButtonElement>) => {
      navigate(`/organization/division/${id.id_division}/employee`);
      dispatch(clearDiv());
    },
    [navigate, dispatch],
  );

  return (
    <div>
      <li>
        <div className={cs(styles.item_todo)}>
          <div className={cs(styles.table_id)}>{todo.id}</div>
          <div className={cs(styles.table_idorg)}>{todo.id_organization}</div>
          <div className={cs(styles.table_name)}>{todo.name}</div>
          <div className={cs(styles.table_phone)}>{todo.phone}</div>
          <div className={cs(styles.actions)}>
            <Tooltip title="Подробнее">
              <button
                type="button"
                className={cs(styles.btn_next)}
                onClick={nextPage({ id_division: todo.id })}
              >
                <img className={cs(styles.icon_action)} src={iconNext} alt="icon-next" />
              </button>
            </Tooltip>
            <button
              type="button"
              className={cs(styles.btn_change)}
              onClick={() => setShowModalChange(true)}
            >
              <img className={cs(styles.icon_action)} src={iconChange} alt="icon-change" />
            </button>
            <button
              type="button"
              className={cs(styles.btn_delete)}
              onClick={() => setShowModalDelete(true)}
            >
              <img className={cs(styles.icon_action)} src={iconDelete} alt="icon-delete" />
            </button>
          </div>
        </div>
      </li>
      {showModalDelete && (
        <DivModalDelete
          onClose={() => setShowModalDelete(false)}
          idDeleteDiv={todo.id}
          idDeleteDivOrg={todo.id_organization}
        />
      )}
      {showModalChange && (
        <DivModalEdit
          onClose={() => setShowModalChange(false)}
          idEditDiv={todo.id}
          idEditDivOrg={todo.id_organization}
        />
      )}
    </div>
  );
};
