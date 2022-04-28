import React, { useCallback, useState } from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import { Organization } from 'Src/models/organization/type';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { editOrg } from 'Src/models/organization/slice';
import styles from './styles.module.scss';

type Props = {
  onClose: () => void;
  idEditOrg: number;
};

export const OrgModalEdit: React.FC<Props> = ({ onClose, idEditOrg }) => {
  const dispatch = useAppDispatch();
  const newOrg = useAppSelector<Organization>(
    (state) => state.org.find((elem) => elem.id === idEditOrg) as Organization,
  );
  const [nameOrgEdit, setNameOrgEdit] = useState<string>(newOrg.name);
  const [addressOrgEdit, setAddressOrgEdit] = useState<string>(newOrg.address);
  const [innOrgEdit, setInnOrgEdit] = useState<string | number>(newOrg.INN);

  const handleSubmitOrgEdit = useCallback(() => {
    dispatch(
      editOrg({
        id: idEditOrg,
        name: nameOrgEdit,
        address: addressOrgEdit,
        INN: innOrgEdit,
      }),
    );
  }, [dispatch, idEditOrg, nameOrgEdit, addressOrgEdit, innOrgEdit]);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleChangeOrgName = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setNameOrgEdit(value);
    },
    [],
  );
  const handleChangeOrgAddress = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setAddressOrgEdit(value);
    },
    [],
  );

  const handleChangeOrgInn = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setInnOrgEdit(value);
    },
    [],
  );

  return (
    <div className={cs(styles.modal)}>
      <div className={cs(styles.window)}>
        <div className={cs(styles.header)}>
          <h2 className={cs(styles.title_modal)}> Edit organization </h2>
          <button type="button" onClick={handleClose}>
            x
          </button>
        </div>
        <hr />
        <div>
          <form className={cs(styles.form_addtodo)}>
            <div className={cs(styles.form_boby)}>
              <div>Organization Name</div>
              <Input
                value={nameOrgEdit}
                name="nameOrgEdit"
                type="text"
                onChange={handleChangeOrgName}
              />
              <div>Organization Address</div>
              <Input
                value={addressOrgEdit}
                name="addressOrgEdit"
                type="text"
                onChange={handleChangeOrgAddress}
              />
              <div>Organization&apos;s INN</div>
              <Input
                value={innOrgEdit}
                name="innOrgTodo"
                type="text"
                onChange={handleChangeOrgInn}
              />
            </div>
            <div className={cs(styles.form_footer)}>
              <Button
                onClick={() => {
                  handleSubmitOrgEdit();
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
