import { ChangeEventHandler, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'Src/hooks';

type Props = {
  anyProp?: any;
};

type idPar = {
  idurl: string | undefined;
};

const handleSubmitEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  //addItemDiv();
  console.log('emlpoye submit');
};

export const useEmployee = (props: Props) => {
  const [employeeFio, setEmployeeFio] = useState<string>('');
  const [employeeAddress, setEmployeeAddress] = useState<string>('');
  const [employeePosition, setEmployeePosition] = useState<string>('');

  const dispatch = useAppDispatch();

  //   const { idurl } = useParams<idPar>();
  //   const idNumber = Number(idurl);

  //   const addItemDiv = useCallback(() => {
  //     const itemDiv = {
  //       id_organization: idNumber,
  //       name: nameDiv,
  //       phone: phoneDiv,
  //     };
  //     dispatch(addDiv({ ...itemDiv }));
  //   }, [idNumber, nameDiv, phoneDiv, dispatch]);

  //   const deleteDiv = useCallback(
  //     (id: IdDivDel) => (e: React.MouseEvent<HTMLButtonElement>) => {
  //       console.log('delete divis');
  //       console.log(id);
  //       dispatch(delDiv(id));
  //       // dispatch(setDiv());
  //     },
  //     [dispatch],
  //   );

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

  return {
    handleChangeEmpFio,
    handleChangeEmpAddress,
    handleChangeEmpPosition,
    handleSubmitEmployee,
    employeeFio,
    employeeAddress,
    employeePosition,
  };
};
