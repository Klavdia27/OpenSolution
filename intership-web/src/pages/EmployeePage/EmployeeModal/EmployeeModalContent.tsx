import React from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import styles from './styles.module.scss';
import { useEmployee } from '../hooks/useEmployee';

type Props = {
  onClose: () => void;
};

export const EmployeeModalContent: React.FC<Props> = ({ onClose }) => {
  const {
    employeeFio,
    employeeAddress,
    employeePosition,
    handleChangeEmpFio,
    handleChangeEmpAddress,
    handleChangeEmpPosition,
    handleSubmitEmployee,
  } = useEmployee({});

  return (
    <div>
      <form className={cs(styles.form_addtodo)}>
        <div className={cs(styles.form_boby)}>
          <div>Name, Surname</div>
          <Input value={employeeFio} name="employeeFio" type="text" onChange={handleChangeEmpFio} />
          <div>Employee Address</div>
          <Input
            value={employeeAddress}
            name="employeeAddress"
            type="text"
            onChange={handleChangeEmpAddress}
          />
          <div>Employee Position</div>
          <Input
            value={employeePosition}
            name="employeePosition"
            type="text"
            onChange={handleChangeEmpPosition}
          />
        </div>
        <div className={cs(styles.form_footer)}>
          <Button onClick={() => onClose()} className={cs(styles.btn_canceltodo)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSubmitEmployee();
              onClose();
            }}
            className={cs(styles.btn_addtodo)}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};
