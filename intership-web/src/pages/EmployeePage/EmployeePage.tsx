import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEmployee } from 'Src/models/employee/slice';
import { Button } from 'Src/UIElements/Button';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { Loader } from 'Src/components/Loader';
import cs from 'classnames';
import styles from './styles.module.scss';
import { HeaderPage } from '../component/HeaderAllPage';
import { EmployeeList } from './EmployeeList';
import { EmployeeModal, EmployeeModalContent } from './EmployeeModal';

type idPar = {
  iddiv: string | undefined;
};

export const EmployeePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const employees = useAppSelector((state) => state.employee);
  const loading = useAppSelector((state) => state.identity.isLoading);

  const { iddiv } = useParams<idPar>();
  const prodId = Number(`${iddiv}`);

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
          <EmployeeModalContent onClose={() => setShowModal(false)} />
        </EmployeeModal>
      )}
      {loading && <Loader />}
    </div>
  );
};
