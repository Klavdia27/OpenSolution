import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeDel, IdDiv, IEmployee, IEmployeeCreate } from './type';

type EmployeeSlice = Array<IEmployee>;

export const initialEmployeeState: EmployeeSlice = [];

export const fetchEmployee = createAction<IdDiv>('fetchEmployee');
export const addEmployee = createAction<IEmployeeCreate>('addEmployee');
export const delEmployee = createAction<EmployeeDel>('DelEmployee');

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
