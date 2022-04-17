import React from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { useAppDispatch } from 'Src/hooks';
import { delOrg } from 'Src/models/organization/slice';
import styles from './styles.module.scss';

type Props = {
  onClose: () => void;
  idDeleteOrg: number;
};

export const OrgModalDelete: React.FC<Props> = ({ onClose, idDeleteOrg }) => {
  const dispatch = useAppDispatch();

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmitOrgDelete = () => {
    dispatch(delOrg({ id: idDeleteOrg }));
  };

  //   const deleteOrg = useCallback(
  //     (id: idDeleteOrg) => (e: React.MouseEvent<HTMLButtonElement>) => {
  //       dispatch(delOrg({ id: idDeleteOrg }));
  //     },
  //     [dispatch],
  //   );

  return (
    <div className={cs(styles.modal)}>
      <div className={cs(styles.window)}>
        <div className={cs(styles.header)}>
          <h2 className={cs(styles.title_modal)}> Delete organization </h2>
          <button type="button" onClick={handleClose}>
            x
          </button>
        </div>
        <span> действительно хотите удалить?</span>
        <hr />
        <div>
          <div className={cs(styles.form_footer)}>
            <Button
              onClick={() => {
                onClose();
              }}
              className={cs(styles.btn_canceltodo)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleSubmitOrgDelete();
                onClose();
              }}
              className={cs(styles.btn_edittodo)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
