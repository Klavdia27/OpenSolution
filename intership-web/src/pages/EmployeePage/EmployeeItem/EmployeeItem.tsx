import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'Src/hooks';
import { IEmployee } from 'Src/models/employee/type';
import cs from 'classnames';
import styles from './styles.module.scss';
import iconChange from './assets/change.png';
import iconDelete from './assets/delete.png';

interface EmployeeItemProps {
  todo: IEmployee;
}

export const EmployeeItem: React.FC<EmployeeItemProps> = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <li>
      <div className={cs(styles.item_todo)}>
        <div className={cs(styles.table_id)}>{todo.id}</div>
        <div className={cs(styles.table_iddiv)}>{todo.id_division}</div>
        <div className={cs(styles.table_fio)}>{todo.FIO}</div>
        <div className={cs(styles.table_address)}>{todo.address}</div>
        <div className={cs(styles.table_position)}>{todo.position}</div>
        <div className={cs(styles.actions)}>
          <img className={cs(styles.icon_action)} src={iconChange} alt="icon-change" />
          <button type="button" className={cs(styles.btn_delete)}>
            <img className={cs(styles.icon_action)} src={iconDelete} alt="icon-delete" />
          </button>
        </div>
      </div>
    </li>
  );
};
