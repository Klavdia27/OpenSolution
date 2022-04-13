import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdOrg, IdDivDel, IDivision, IDivisionCreate } from './type';

type DivSlice = Array<IDivision>;

export const initialDivState: DivSlice = [];

export const fetchDiv = createAction<IdOrg>('fetchDiv');
export const addDiv = createAction<IDivisionCreate>('addDiv');
export const delDiv = createAction<IdDivDel>('delDiv');

export const divSlice = createSlice({
  name: 'div',
  initialState: initialDivState,
  reducers: {
    setDiv: (state, action: PayloadAction<IDivision[]>) => {
      return [...state, ...action.payload];
    },
    clearDiv: () => {
      return [];
    },
  },
});

export const { setDiv, clearDiv } = divSlice.actions;
export default divSlice.reducer;
