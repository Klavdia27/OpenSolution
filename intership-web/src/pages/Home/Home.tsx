import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import { fetchOrg } from 'Src/models/organization/slice';
import { OrgList } from './component/OrgList/OrgList';
import styles from './styles.module.scss';
import { OrgModal } from './orgModal/OrgModal';
import { useOrgs } from './hooks/useOrgs';
import { HeaderPage } from '../component/HeaderAllPage/HeaderAllPage';
import { OrgModalContent } from './orgModal';

// type OrgType = {
//   id: number;
//   name: string;
//   address: string;
//   inn: string;
//   complete: boolean;
// };

// interface OrgListProps {
//   items: Array<OrgType>;
//   title: string;
// }
type Props = {
  someProp?: any;
};

export const HomePage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const orgs = useAppSelector((state) => state.org);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchOrg());
  }, [dispatch]);

  return (
    <div>
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

      {showModal && (
        <OrgModal title="Add Organization" onClose={() => setShowModal(false)}>
          <OrgModalContent onClose={() => setShowModal(false)} />
        </OrgModal>
      )}
    </div>
  );
};
