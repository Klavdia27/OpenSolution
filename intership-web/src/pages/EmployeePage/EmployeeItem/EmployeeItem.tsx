import React, { useState } from 'react';
import { IEmployee } from 'Src/models/employee/type';
import cs from 'classnames';
import styles from './styles.module.scss';
import iconChange from './assets/change.png';
import iconDelete from './assets/delete.png';
import { EmployeeModalDelete, EmployeeModalEdit } from '../EmployeeModal';

interface EmployeeItemProps {
  todo: IEmployee;
}

export const EmployeeItem: React.FC<EmployeeItemProps> = ({ todo }) => {
  const [showModalChange, setShowModalChange] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  return (
    <div>
      <li>
        <div className={cs(styles.item_todo)}>
          <div className={cs(styles.table_id)}>{todo.id}</div>
          <div className={cs(styles.table_iddiv)}>{todo.id_division}</div>
          <div className={cs(styles.table_fio)}>{todo.FIO}</div>
          <div className={cs(styles.table_address)}>{todo.address}</div>
          <div className={cs(styles.table_position)}>{todo.position}</div>
          <div className={cs(styles.actions)}>
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
        <EmployeeModalDelete
          onClose={() => setShowModalDelete(false)}
          idDeleteEmployee={todo.id}
          idDeleteEmployeeDiv={todo.id_division}
        />
      )}
      {showModalChange && (
        <EmployeeModalEdit
          onClose={() => setShowModalChange(false)}
          idEditEmployee={todo.id}
          idEditEmployeeDiv={todo.id_division}
        />
      )}
    </div>
  );
};
