import React, { InputHTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './styles.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  someProp?: any;
};

export const ModalTitle: React.FC<{
  title: string;
  children?: React.ReactElement;
  onClose: () => void;
}> = ({ title, onClose, ...rest }) => {
  const handleCloseX = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };
  return (
    <div className={cs(styles.header)}>
      <h2 className={cs(styles.title_modal)}> {title} </h2>
      <button type="button" onClick={handleCloseX}>
        x
      </button>
    </div>
  );
};
