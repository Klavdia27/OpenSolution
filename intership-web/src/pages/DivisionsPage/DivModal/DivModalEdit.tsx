import React, { useCallback, useState } from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { IDivision } from 'Src/models/division/type';
import { editDiv } from 'Src/models/division/slice';
import styles from './styles.module.scss';

type Props = {
  onClose: () => void;
  idEditDiv: number;
  idEditDivOrg: number;
};

export const DivModalEdit: React.FC<Props> = ({ onClose, idEditDiv, idEditDivOrg }) => {
  const dispatch = useAppDispatch();
  const newDiv = useAppSelector<IDivision>(
    (state) => state.div.find((elem) => elem.id === idEditDiv) as IDivision,
  );
  const [nameDivEdit, setNameDivEdit] = useState<string>(newDiv.name);
  const [phoneDivEdit, setPhoneDivEdit] = useState<string | number>(newDiv.phone);

  const handleSubmitDivEdit = useCallback(() => {
    dispatch(
      editDiv({
        id: idEditDiv,
        id_organization: idEditDivOrg,
        name: nameDivEdit,
        phone: phoneDivEdit,
      }),
    );
  }, [dispatch, idEditDiv, idEditDivOrg, nameDivEdit, phoneDivEdit]);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleChangeDivName = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setNameDivEdit(value);
    },
    [],
  );
  const handleChangeDivPhone = useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
      setPhoneDivEdit(value);
    },
    [],
  );

  return (
    <div className={cs(styles.modal)}>
      <div className={cs(styles.window)}>
        <div className={cs(styles.header)}>
          <h2 className={cs(styles.title_modal)}> Edit division </h2>
          <button type="button" onClick={handleClose}>
            x
          </button>
        </div>
        <hr />
        <div>
          <form className={cs(styles.form_addtodo)}>
            <div className={cs(styles.form_boby)}>
              <div>Division Name</div>
              <Input
                value={nameDivEdit}
                name="nameDivEdit"
                type="text"
                onChange={handleChangeDivName}
              />
              <div>Division&apos;s Phone</div>
              <Input
                value={phoneDivEdit}
                name="phoneDivEdit"
                type="text"
                onChange={handleChangeDivPhone}
              />
            </div>
            <div className={cs(styles.form_footer)}>
              <Button
                onClick={() => {
                  handleSubmitDivEdit();
                  onClose();
                }}
                className={cs(styles.btn_edittodo)}
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
