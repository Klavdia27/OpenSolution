import React from 'react';
import cs from 'classnames';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import styles from './styles.module.scss';
import { useDivs } from '../hooks/useDivs';

type Props = {
  onClose: () => void;
};

export const DivModalContent: React.FC<Props> = ({ onClose }) => {
  const { nameDiv, phoneDiv, handleChangeDivName, handleChangeDivPhone, handleSubmitDiv } = useDivs(
    {},
  );

  return (
    <div>
      <form className={cs(styles.form_addtodo)}>
        <div className={cs(styles.form_boby)}>
          <div>Division Name</div>
          <Input value={nameDiv} name="nameDiv" type="text" onChange={handleChangeDivName} />
          <div>Division&apos;s Phone</div>
          <Input value={phoneDiv} name="phoneDiv" type="text" onChange={handleChangeDivPhone} />
        </div>
        <div className={cs(styles.form_footer)}>
          <Button onClick={() => onClose()} className={cs(styles.btn_canceltodo)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSubmitDiv();
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
