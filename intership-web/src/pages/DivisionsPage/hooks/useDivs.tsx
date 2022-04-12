import { ChangeEventHandler, useCallback, useState } from 'react';
import { useAppDispatch } from 'Src/hooks';
import { addDiv, delDiv } from 'Src/models/division/slice';
import { IdDiv } from 'Src/models/division/type';
import { addOrg, clearOrgs, delOrg } from 'Src/models/organization/slice';
import { IdOrg } from 'Src/models/organization/type';

type Props = {
  anyProp?: any;
};

type IDivision = {
  id: number;
  id_organization: number;
  name: string;
  phone: number;
};

export const useDivs = (props: Props) => {
  const [nameDiv, setNameDiv] = useState<string>('');
  const [phoneDiv, setPhoneDiv] = useState<string>('');
  const dispatch = useAppDispatch();

  const addItemDiv = useCallback(() => {
    const itemDiv = {
      id_organization: 1,
      name: nameDiv,
      phone: phoneDiv,
    };
    dispatch(addDiv({ ...itemDiv }));
  }, [nameDiv, phoneDiv, dispatch]);

  const deleteDiv = useCallback(
    (id: IdDiv) => (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log('delete divis');
      console.log(id);
      dispatch(delDiv(id));
    },
    [dispatch],
  );

  const handleChangeDivName = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setNameDiv(value);
    },
    [],
  );

  const handleChangeDivPhone = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setPhoneDiv(value);
    },
    [],
  );

  const handleSubmitDiv = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItemDiv();
    console.log(45);
  };

  return {
    handleChangeDivName,
    handleChangeDivPhone,
    handleSubmitDiv,
    deleteDiv,
    nameDiv,
    phoneDiv,
  };
};
