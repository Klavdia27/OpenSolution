import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'Src/UIElements/Button';
import { Input } from 'Src/UIElements/Input';
import cs from 'classnames';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { fetchDiv } from 'Src/models/division/slice';
import { HeaderPage } from '../component/HeaderAllPage';
import styles from './styles.module.scss';
import { useDivs } from './hooks/useDivs';
import { DivList } from './DivList';
import { DivModal } from './DivModal';

type idPar = {
  idurl: string | undefined;
};

export const DivisionsPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { handleChangeDivName, handleChangeDivPhone, handleSubmitDiv, nameDiv, phoneDiv } = useDivs(
    {},
  );
  const divs = useAppSelector((state) => state.div);

  const { idurl } = useParams<idPar>();
  const prodId = Number(`${idurl}`);

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
          <form className={cs(styles.form_addtodo)}>
            <div className={cs(styles.form_boby)}>
              <div>Division Name</div>
              <Input value={nameDiv} name="nameDiv" type="text" onChange={handleChangeDivName} />
              <div>Division Phone</div>
              <Input value={phoneDiv} name="phoneDiv" type="text" onChange={handleChangeDivPhone} />
            </div>
            <div className={cs(styles.form_footer)}>
              <Button onClick={() => setShowModal(false)} className={cs(styles.btn_canceltodo)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitDiv} className={cs(styles.btn_addtodo)}>
                Add
              </Button>
            </div>
          </form>
        </DivModal>
      )}
    </div>
  );
};
