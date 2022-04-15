import React from 'react';
import { CircularProgress } from '@mui/material';
import cs from 'classnames';
import styles from './styles.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={cs(styles.loader)}>
      <CircularProgress />
    </div>
  );
};
