import { ChangeEventHandler, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'Src/hooks';
import { addEmployee, delEmployee } from 'Src/models/employee/slice';

type Props = {
  anyProp?: any;
};

type idPar = {
  idurl: string | undefined;
};

export const useEmployee = (props: Props) => {
  const [employeeFio, setEmployeeFio] = useState<string>('');
  const [employeeAddress, setEmployeeAddress] = useState<string>('');
  const [employeePosition, setEmployeePosition] = useState<string>('');

  const dispatch = useAppDispatch();

  const { idurl } = useParams<idPar>();
  const idNumber = Number(idurl);

  const addItemEmployee = useCallback(() => {
    const itemDiv = {
      id_division: idNumber,
      FIO: employeeFio,
      address: employeeAddress,
      position: employeePosition,
    };
    dispatch(addEmployee({ ...itemDiv }));
  }, [idNumber, employeeFio, employeeAddress, employeePosition, dispatch]);

  const deleteEmployee = useCallback(
    ({ id, idDivision }) =>
      (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(delEmployee({ id, idDivision }));
      },
    [dispatch],
  );

  const handleChangeEmpFio = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setEmployeeFio(value);
    },
    [],
  );

  const handleChangeEmpAddress = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setEmployeeAddress(value);
    },
    [],
  );

  const handleChangeEmpPosition = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setEmployeePosition(value);
    },
    [],
  );

  const handleSubmitEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('emlpoye submit');
    addItemEmployee();
  };

  return {
    handleChangeEmpFio,
    handleChangeEmpAddress,
    handleChangeEmpPosition,
    handleSubmitEmployee,
    deleteEmployee,
    employeeFio,
    employeeAddress,
    employeePosition,
  };
};
