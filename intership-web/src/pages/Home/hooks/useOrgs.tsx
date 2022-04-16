import { useCallback, useState } from 'react';
import { useAppDispatch } from 'Src/hooks';
import { addOrg, delOrg } from 'Src/models/organization/slice';
import { IdOrg } from 'Src/models/organization/type';

type Props = {
  anyProp?: any;
};

export const useOrgs = (props: Props) => {
  const [nameOrg, setNameOrg] = useState<string>('');
  const [addressOrg, setAddressOrg] = useState<string>('');
  const [innOrg, setInnOrg] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmitOrg = () => {
    addItem();
  };
  const addItem = useCallback(() => {
    const item = {
      name: nameOrg,
      address: addressOrg,
      INN: innOrg,
    };
    dispatch(addOrg({ ...item }));
  }, [nameOrg, addressOrg, innOrg, dispatch]);

  const deleteOrg = useCallback(
    (id: IdOrg) => (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(delOrg(id));
    },
    [dispatch],
  );

  const handleChangeOrgName = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setNameOrg(value);
    },
    [],
  );

  const handleChangeOrgAddress = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setAddressOrg(value);
    },
    [],
  );

  const handleChangeOrgInn = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setInnOrg(value);
    },
    [],
  );

  return {
    handleChangeOrgName,
    handleChangeOrgAddress,
    handleChangeOrgInn,
    handleSubmitOrg,
    deleteOrg,
    nameOrg,
    addressOrg,
    innOrg,
  };
};
