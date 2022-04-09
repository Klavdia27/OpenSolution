import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Organization, OrganizationCreate } from './type';

// задаем типы полей
type OrgSlice = Array<Organization>;
// создаем начальное состояние
export const initialOrgState: OrgSlice = [];

// создаем экшен с type 'login'
export const fetchOrg = createAction('fetchOrg');

export const addOrg = createAction<OrganizationCreate>('addOrg');
// создаем identitySlice, объединяет в себе createReducer и createAction
export const orgSlice = createSlice({
  name: 'org',
  initialState: initialOrgState,
  reducers: {
    setOrg: (state, action: PayloadAction<Organization[]>) => {
      return [...state, ...action.payload];
    },
  },
});

// деструктуризируем поле actions, которое получаем из slice
export const { setOrg } = orgSlice.actions;
// экспортируем созданный редьюсер
export default orgSlice.reducer;
