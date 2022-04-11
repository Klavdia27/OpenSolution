import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Organization, OrganizationCreate, IdOrg } from './type';

// задаем типы полей
type OrgSlice = Array<Organization>;
// создаем начальное состояние
export const initialOrgState: OrgSlice = [];

// создаем экшен с type 'login'
export const fetchOrg = createAction('fetchOrg');

// создаем экшен добавления организации
export const addOrg = createAction<OrganizationCreate>('addOrg');

export const delOrg = createAction<IdOrg>('delOrg');

// создаем identitySlice, объединяет в себе createReducer и createAction
export const orgSlice = createSlice({
  name: 'org',
  initialState: initialOrgState,
  reducers: {
    setOrg: (state, action: PayloadAction<Organization[]>) => {
      return [...state, ...action.payload];
    },
    clearOrgs: () => {
      return [];
    },
  },
});

// деструктуризируем поле actions, которое получаем из slice
export const { setOrg, clearOrgs } = orgSlice.actions;
// экспортируем созданный редьюсер
export default orgSlice.reducer;
