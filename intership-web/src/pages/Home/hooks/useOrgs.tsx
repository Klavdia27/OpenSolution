import { useCallback, useState } from 'react';
import { useAppDispatch } from 'Src/hooks';
import { addOrg } from 'Src/models/organization/slice';

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
    nameOrg,
    addressOrg,
    innOrg,
  };
};
