import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cs from 'classnames';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { Button } from 'Common/UI/Button';
import { clearOrgs, fetchOrg } from 'Src/models/organization/slice';
import { Loader } from 'Src/components/Loader';
import styles from './styles.module.scss';
import { OrgModal } from './orgModal/OrgModal';
import { HeaderPage } from '../component/HeaderAllPage/HeaderAllPage';
import { OrgModalContent } from './orgModal';
import { OrgList } from './component/OrgList';

type Props = {
  someProp?: any;
};

export const HomePage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const orgs = useAppSelector((state) => state.org);

  const [showModal, setShowModal] = useState(false);

  const loading = useAppSelector((state) => state.identity.isLoading);

  useEffect(() => {
    dispatch(fetchOrg());
  }, [dispatch]);

  const openLoginPage = () => {
    navigate(`/login`); // тут по заданию не понятно куда должна вести кнопка
    dispatch(clearOrgs());
  };

  return (
    <div>
      <div>
        <HeaderPage />
        <div className={cs(styles.org)}>
          <div className={cs(styles.btns)}>
            <Button className={cs(styles.button_back, styles.button)} onClick={openLoginPage}>
              Back
            </Button>
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
      {loading && <Loader />}
    </div>
  );
};
