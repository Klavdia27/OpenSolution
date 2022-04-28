import React from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { useAppDispatch } from 'Src/hooks';
import { delEmployee } from 'Src/models/employee/slice';
import styles from './styles.module.scss';

interface Props {
  onClose: () => void;
  idDeleteEmployee: number;
  idDeleteEmployeeDiv: number;
}

export const EmployeeModalDelete: React.FC<Props> = ({
  onClose,
  idDeleteEmployee,
  idDeleteEmployeeDiv,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmitEmployeeDelete = () => {
    dispatch(delEmployee({ id: idDeleteEmployee, idDivision: idDeleteEmployeeDiv }));
  };

  return (
    <div className={cs(styles.modal)}>
      <div className={cs(styles.window)}>
        <div className={cs(styles.header)}>
          <h2 className={cs(styles.title_modal)}> Delete employee </h2>
          <button type="button" onClick={handleClose}>
            x
          </button>
        </div>
        <span> действительно хотите удалить?</span>
        <hr />
        <div>
          <div className={cs(styles.form_footer)}>
            <Button
              onClick={() => {
                onClose();
              }}
              className={cs(styles.btn_canceltodo)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleSubmitEmployeeDelete();
                onClose();
              }}
              className={cs(styles.btn_edittodo)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
