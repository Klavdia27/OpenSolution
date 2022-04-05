import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

// задаем типы полей
type IdentitySlice = {
  isLogin: boolean;
  isLoading: boolean;
};

// создаем начальное состояние
export const initialIdentityState: IdentitySlice = {
  isLogin: false,
  isLoading: false,
};

// задаем типы полей и экспортируем
export type CredentialPayload = {
  login: string;
  password: string;
};

// создаем экшен с type 'login'
export const doLogin = createAction<CredentialPayload>('login');

export const doLogout = createAction('logout');

// создаем identitySlice, объединяет в себе createReducer и createAction
export const identitySlice = createSlice({
  name: 'identity',
  initialState: initialIdentityState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLogin: action.payload,
      };
      // state.isLogin = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: action.payload,
      };
      //state.isLoading = action.payload;
    },
  },
});

// деструктуризируем поле actions, которое получаем из slice
export const { setLogin, setLoading } = identitySlice.actions;
// экспортируем созданный редьюсер
export default identitySlice.reducer;
