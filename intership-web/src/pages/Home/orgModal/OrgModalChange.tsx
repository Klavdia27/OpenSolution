import React from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import styles from './styles.module.scss';
import { useOrgs } from '../hooks/useOrgs';

type Props = {
  onClose: () => void;
};

export const OrgModalChange: React.FC<Props> = ({ onClose }) => {
  const {
    nameOrg,
    addressOrg,
    innOrg,
    handleChangeOrgName,
    handleChangeOrgAddress,
    handleChangeOrgInn,
  } = useOrgs({});

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={cs(styles.modal)}>
      <div className={cs(styles.window)}>
        <div className={cs(styles.header)}>
          <h2 className={cs(styles.title_modal)}> Change organization </h2>
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
                value={nameOrg}
                name="nameOrgTodo"
                type="text"
                onChange={handleChangeOrgName}
              />
              <div>Organization Address</div>
              <Input
                value={addressOrg}
                name="addressOrgTodo"
                type="text"
                onChange={handleChangeOrgAddress}
              />
              <div>Organization&apos;s INN</div>
              <Input value={innOrg} name="innOrgTodo" type="text" onChange={handleChangeOrgInn} />
            </div>
            <div className={cs(styles.form_footer)}>
              <Button
                onClick={() => {
                  onClose();
                }}
                className={cs(styles.btn_addtodo)}
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
