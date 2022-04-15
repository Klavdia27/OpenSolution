import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'Src/UIElements/Button';
import cs from 'classnames';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { fetchDiv } from 'Src/models/division/slice';
import { Loader } from 'Src/components/Loader';
import { HeaderPage } from '../component/HeaderAllPage';
import styles from './styles.module.scss';
import { DivList } from './DivList';
import { DivModal, DivModalContent } from './DivModal';

type idPar = {
  idorg: string | undefined;
};

export const DivisionsPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const divs = useAppSelector((state) => state.div);
  const loading = useAppSelector((state) => state.identity.isLoading);
  const { idorg } = useParams<idPar>();
  const prodId = Number(`${idorg}`);

  useEffect(() => {
    dispatch(fetchDiv({ id_organization: prodId }));
  }, [prodId, dispatch]);

  return (
    <div>
      <HeaderPage />
      <div className={cs(styles.div)}>
        <div className={cs(styles.btns)}>
          <Button className={cs(styles.button_back, styles.button)}>Back</Button>
          <Button
            className={cs(styles.button_add_org, styles.button)}
            onClick={() => setShowModal(true)}
          >
            Add Division
          </Button>
        </div>
        <div className={cs(styles.table)}>
          <div className={cs(styles.table_id)}>id</div>
          <div className={cs(styles.table_idorg)}>id_organization</div>
          <div className={cs(styles.table_name)}>name</div>
          <div className={cs(styles.table_phone)}>phone</div>
          <div className={cs(styles.table_action)}>Actions</div>
        </div>
        <DivList items={divs} />
      </div>
      {showModal && (
        <DivModal title="Add Division" onClose={() => setShowModal(false)}>
          <DivModalContent onClose={() => setShowModal(false)} />
        </DivModal>
      )}
      {loading && <Loader />}
    </div>
  );
};
