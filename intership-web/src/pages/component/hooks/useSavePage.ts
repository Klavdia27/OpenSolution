import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from 'redux-actions';

export const actionPageSave = createAction<string>('pageSave');

export const usePageSave = () => {
  const dispatch = useDispatch();
  const [pageSave, setPageSave] = useState<string>('');
};
