import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEmployee } from 'Src/models/employee/slice';
import { Button } from 'Src/UIElements/Button';
import { Input } from 'Src/UIElements/Input';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import cs from 'classnames';
import styles from './styles.module.scss';
import { HeaderPage } from '../component/HeaderAllPage';
import { EmployeeList } from './EmployeeList';
import { EmployeeModal } from './EmployeeModal';
import { useEmployee } from './hooks/useEmployee';

type idPar = {
  idurl: string | undefined;
};

export const EmployeePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const employees = useAppSelector((state) => state.employee);

  const {
    handleChangeEmpFio,
    handleChangeEmpAddress,
    handleChangeEmpPosition,
    handleSubmitEmployee,
    employeeFio,
    employeeAddress,
    employeePosition,
  } = useEmployee({});

  const { idurl } = useParams<idPar>();
  const prodId = Number(`${idurl}`);
  console.log(prodId);
  useEffect(() => {
    dispatch(fetchEmployee({ id_division: prodId }));
  }, [prodId, dispatch]);

  return (
    <div>
      <HeaderPage />
      <div className={cs(styles.div)}>
        <div className={cs(styles.btns)}>
          <Button className={cs(styles.button_back, styles.button)}>Back</Button>
          <Button
            className={cs(styles.button_add_org, styles.button)}
            onClick={() => setShowModal(true)}
          >
            Add Employee
          </Button>
        </div>
        <div className={cs(styles.table)}>
          <div className={cs(styles.table_id)}>id</div>
          <div className={cs(styles.table_iddiv)}>id_division</div>
          <div className={cs(styles.table_fio)}>Name, Surname</div>
          <div className={cs(styles.table_address)}>Employee address</div>
          <div className={cs(styles.table_position)}>Employeess Position</div>
          <div className={cs(styles.table_actions)}>Actions</div>
        </div>
        <EmployeeList items={employees} />
      </div>
      {showModal && (
        <EmployeeModal title="Add Employee" onClose={() => setShowModal(false)}>
          <form className={cs(styles.form_addtodo)}>
            <div className={cs(styles.form_boby)}>
              <div>Name, Surname</div>
              <Input
                value={employeeFio}
                name="employeeFio"
                type="text"
                onChange={handleChangeEmpFio}
              />
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
              <Button onClick={() => setShowModal(false)} className={cs(styles.btn_canceltodo)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitEmployee} className={cs(styles.btn_addtodo)}>
                Add
              </Button>
            </div>
          </form>
        </EmployeeModal>
      )}
    </div>
  );
};
