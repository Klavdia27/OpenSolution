import React, { useCallback, useState } from 'react';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { clearOrgs } from 'Src/models/organization/slice';
import { IdOrg } from 'Src/models/organization/type';
import cs from 'classnames';
import styles from './styles.module.scss';
import iconNext from './assets/next.png';
import iconChange from './assets/change.png';
import iconDelete from './assets/delete.png';
import { useAppDispatch } from '../../../../hooks';
import { useOrgs } from '../../hooks/useOrgs';
import { OrgModal, OrgModalChange, OrgModalContent } from '../../orgModal';

type OrgType = {
  id: number;
  name: string;
  address: string;
  INN: number | string;
};

interface OrgListItemProps {
  todo: OrgType;
}

export const OrgListItem: React.FC<OrgListItemProps> = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const openDivision = useCallback(
    (id: IdOrg) => (event: React.MouseEvent<HTMLButtonElement>) => {
      navigate(`/organization/${id.id}/division`);
      dispatch(clearOrgs());
    },
    [navigate, dispatch],
  );

  const { deleteOrg } = useOrgs({});
  const [showModal, setShowModal] = useState(false);
  const [showModalChange, setShowModalChange] = useState(false);
  // const handleModalChange = () => {
  //   console.log('open change org');

  // };

  return (
    <div>
      <li>
        <div className={cs(styles.item_todo)}>
          <div className={cs(styles.table_ID)}>{todo.id}</div>
          <div className={cs(styles.table_name)}>{todo.name}</div>
          <div className={cs(styles.table_address)}>{todo.address}</div>
          <div className={cs(styles.table_inn)}>{todo.INN}</div>
          <div className={cs(styles.actions)}>
            <Tooltip title="Подробнее">
              <button
                type="button"
                className={cs(styles.btn_next)}
                onClick={openDivision({ id: todo.id })}
              >
                <img className={cs(styles.icon_action)} src={iconNext} alt="icon-next" />
              </button>
            </Tooltip>
            <button
              type="button"
              className={cs(styles.btn_next)}
              onClick={() => setShowModalChange(true)}
            >
              <img className={cs(styles.icon_action)} src={iconChange} alt="icon-change" />
            </button>
            <button
              type="button"
              className={cs(styles.btn_delete)}
              onClick={deleteOrg({ id: todo.id })}
            >
              <img className={cs(styles.icon_action)} src={iconDelete} alt="icon-delete" />
            </button>
          </div>
        </div>
      </li>
      {showModal && (
        <OrgModal title="Add Organization" onClose={() => setShowModal(false)}>
          <OrgModalContent onClose={() => setShowModal(false)} />
        </OrgModal>
      )}
      {showModalChange && <OrgModalChange onClose={() => setShowModalChange(false)} />}
    </div>
  );
};
