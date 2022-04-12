import React from 'react';
import cs from 'classnames';
import styles from './styles.module.scss';

export const OrgModal: React.FC<{
  title: string;
  children?: React.ReactElement;
  onClose: () => void;
}> = ({ title, children, onClose }) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClose();
  };
  const handleCloseX = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={cs(styles.modal)}>
      {/*<div className={cs(styles.background)} onClick={handleClose} role="???" />*/}
      <div className={cs(styles.window)}>
        <div className={cs(styles.header)}>
          <h2 className={cs(styles.title_modal)}> {title} </h2>
          <button type="button" onClick={handleCloseX}>
            x
          </button>
        </div>
        <hr />
        <div className={cs(styles.content)}> {children} </div>
      </div>
    </div>
  );
};
