import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdDiv, IEmployee } from './type';

type EmployeeSlice = Array<IEmployee>;

export const initialEmployeeState: EmployeeSlice = [];

export const fetchEmployee = createAction<IdDiv>('fetchDiv');
//export const addEmployee = createAction<IDivisionCreate>('addDiv');
//export const delEmployee = createAction<IdDivDel>('delDiv');

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialEmployeeState,
  reducers: {
    setEmployee: (state, action: PayloadAction<IEmployee[]>) => {
      return [...state, ...action.payload];
    },
    clearEmployee: () => {
      return [];
    },
  },
});

export const { setEmployee, clearEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
