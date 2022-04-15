import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'Src/hooks';
import { addDiv, delDiv } from 'Src/models/division/slice';
import { DivisionDel } from 'Src/models/division/type';

type Props = {
  anyProp?: any;
};

type idPar = {
  idorg: string | undefined;
};

export const useDivs = (props: Props) => {
  const [nameDiv, setNameDiv] = useState<string>('');
  const [phoneDiv, setPhoneDiv] = useState<string>('');
  const dispatch = useAppDispatch();

  const { idorg } = useParams<idPar>();
  const idNumber = Number(idorg);

  const addItemDiv = useCallback(() => {
    const itemDiv = {
      id_organization: idNumber,
      name: nameDiv,
      phone: phoneDiv,
    };
    dispatch(addDiv({ ...itemDiv }));
  }, [idNumber, nameDiv, phoneDiv, dispatch]);

  const deleteDiv = useCallback(
    ({ id, idOrganization }: DivisionDel) =>
      (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(delDiv({ id, idOrganization }));
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

  const handleSubmitDiv = () => {
    addItemDiv();
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
