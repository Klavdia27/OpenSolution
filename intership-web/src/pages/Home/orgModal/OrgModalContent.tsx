import React from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import styles from './styles.module.scss';
import { useOrgs } from '../hooks/useOrgs';

type Props = {
  onClose: () => void;
};

export const OrgModalContent: React.FC<Props> = ({ onClose }) => {
  const {
    nameOrg,
    addressOrg,
    innOrg,
    handleChangeOrgName,
    handleChangeOrgAddress,
    handleChangeOrgInn,
    handleSubmitOrg,
  } = useOrgs({});

  return (
    <div>
      <form className={cs(styles.form_addtodo)}>
        <div className={cs(styles.form_boby)}>
          <div>Organization Name</div>
          <Input value={nameOrg} name="nameOrgTodo" type="text" onChange={handleChangeOrgName} />
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
          <Button onClick={() => onClose()} className={cs(styles.btn_canceltodo)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSubmitOrg();
              onClose();
            }}
            className={cs(styles.btn_addtodo)}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};
