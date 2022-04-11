import React, { useCallback } from 'react';

import cs from 'classnames';
import { Button } from 'Src/UIElements/Button';
import { doLogout } from 'Src/models/identity/slice';
import { useAppDispatch } from 'Src/hooks';
import styles from './styles.module.scss';
import icon from './assets/icon-auth.png';

type Props = {
  someProp?: any;
};

export const HeaderPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(doLogout());
  }, [dispatch]);

  return (
    <footer className={cs(styles.footer)}>
      <img className={cs(styles.icon)} src={icon} alt="icon-auth" />
      <Button className={cs(styles.button_footer, styles.button)} onClick={handleLogout}>
        Logout
      </Button>
    </footer>
  );
};
