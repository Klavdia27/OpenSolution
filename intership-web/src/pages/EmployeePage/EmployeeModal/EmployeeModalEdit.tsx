import React, { useCallback, useState } from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { IEmployee } from 'Src/models/employee/type';
import { editEmployee } from 'Src/models/employee/slice';
import styles from './styles.module.scss';

type Props = {
  onClose: () => void;
  idEditEmployee: number;
  idEditEmployeeDiv: number;
};

export const EmployeeModalEdit: React.FC<Props> = ({
  onClose,
  idEditEmployee,
  idEditEmployeeDiv,
}) => {
  const dispatch = useAppDispatch();
  const newDiv = useAppSelector<IEmployee>(
    (state) => state.employee.find((elem) => elem.id === idEditEmployee) as IEmployee,
  );
  const [FIOEmployeeEdit, setFIOEmployeeEdit] = useState<string>(newDiv.FIO);
  const [addressEmployeeEdit, setAddressEmployeeEdit] = useState<string>(newDiv.address);
  const [positionEmployeeEdit, setPositionEmployeeEdit] = useState<string>(newDiv.position);

  const handleSubmitEmployeeEdit = useCallback(() => {
    dispatch(
      editEmployee({
        id: idEditEmployee,
        id_division: idEditEmployeeDiv,
        FIO: FIOEmployeeEdit,
        address: addressEmployeeEdit,
        position: positionEmployeeEdit,
      }),
    );
  }, [
    dispatch,
    idEditEmployee,
    idEditEmployeeDiv,
    FIOEmployeeEdit,
    addressEmployeeEdit,
    positionEmployeeEdit,
  ]);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleChangeEmployeeFIO = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setFIOEmployeeEdit(value);
    },
    [],
  );
  const handleChangeEmployeeAddress = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setAddressEmployeeEdit(value);
    },
    [],
  );
  const handleChangeEmployeePosition = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setPositionEmployeeEdit(value);
    },
    [],
  );

  return (
    <div className={cs(styles.modal)}>
      <div className={cs(styles.window)}>
        <div className={cs(styles.header)}>
          <h2 className={cs(styles.title_modal)}> Edit employee </h2>
          <button type="button" onClick={handleClose}>
            x
          </button>
        </div>
        <hr />
        <div>
          <form className={cs(styles.form_addtodo)}>
            <div className={cs(styles.form_boby)}>
              <div>Name, Surname</div>
              <Input
                value={FIOEmployeeEdit}
                name="FIOEmployeeEdit"
                type="text"
                onChange={handleChangeEmployeeFIO}
              />
              <div>Employee Address</div>
              <Input
                value={addressEmployeeEdit}
                name="addressEmployeeEdit"
                type="text"
                onChange={handleChangeEmployeeAddress}
              />
              <div>Employees&apos;s Position</div>
              <Input
                value={positionEmployeeEdit}
                name="positionEmployeeEdit"
                type="text"
                onChange={handleChangeEmployeePosition}
              />
            </div>
            <div className={cs(styles.form_footer)}>
              <Button
                onClick={() => {
                  handleSubmitEmployeeEdit();
                  onClose();
                }}
                className={cs(styles.btn_edittodo)}
              >
                Редактировать
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
