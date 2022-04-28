import React from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { useAppDispatch } from 'Src/hooks';
import { delDiv } from 'Src/models/division/slice';
import styles from './styles.module.scss';

interface Props {
  onClose: () => void;
  idDeleteDiv: number;
  idDeleteDivOrg: number;
}

export const DivModalDelete: React.FC<Props> = ({ onClose, idDeleteDiv, idDeleteDivOrg }) => {
  const dispatch = useAppDispatch();

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmitDivDelete = () => {
    dispatch(delDiv({ id: idDeleteDiv, idOrganization: idDeleteDivOrg }));
  };

  return (
    <div className={cs(styles.modal)}>
      <div className={cs(styles.window)}>
        <div className={cs(styles.header)}>
          <h2 className={cs(styles.title_modal)}> Delete division </h2>
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
                handleSubmitDivDelete();
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
