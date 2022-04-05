import React, { useCallback } from 'react';
import { useAppDispatch } from 'Src/hooks';
import { doLogout } from 'Src/models/identity/slice';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(doLogout());
  }, [dispatch]);

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleLogout} type="button">
        logout
      </button>
    </div>
  );
};
