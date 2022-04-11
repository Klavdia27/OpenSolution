import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'Src/UIElements/Button';
import { HeaderPage } from 'Src/pages/component/HeaderAllPage';
import { useAppSelector } from 'Src/hooks';
import cs from 'classnames';
import styles from './styles.module.scss';
import { OrgList } from '../OrgList';

export const ChildOrg: React.FC = () => {
  const orgs = useAppSelector((state) => state.org);
  const { id } = useParams();
  console.log(id);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <HeaderPage />
      <div className={cs(styles.org)}>
        <div className={cs(styles.btns)}>
          <Button className={cs(styles.button_back, styles.button)}>Back</Button>
          <Button
            className={cs(styles.button_add_org, styles.button)}
            onClick={() => setShowModal(true)}
          >
            Add Organization
          </Button>
        </div>
        <div className={cs(styles.table)}>
          <div className={cs(styles.table_ID)}>ID</div>
          <div className={cs(styles.table_name)}>name</div>
          <div className={cs(styles.table_address)}>address</div>
          <div className={cs(styles.table_inn)}>INN</div>
          <div className={cs(styles.table_action)}>Actions</div>
        </div>
        <OrgList items={orgs} />
      </div>
    </div>
  );
};
