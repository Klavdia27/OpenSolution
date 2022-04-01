import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

type IdentitySlice = {
  isLogin: boolean;
  loading: boolean;
};

export const initialIdentityState: IdentitySlice = {
  isLogin: false,
  loading: false,
};

export type CredentialPayload = {
  login: string;
  password: string;
};

export const doLogin = createAction<CredentialPayload>('login');
// doLogin()
// { type: 'login'}
// doLogin({login: 'user' , password: '123' })
// {type: 'login' , payload: {login: 'user' , password: '123' }}

export const doLogout = createAction('logout');
// doLogout()
// { type: 'logout'}

export const identitySlice = createSlice({
  name: 'identity',
  initialState: initialIdentityState,
  reducers: {
    setIdentity: (state, action: PayloadAction<IdentitySlice>) => {
      return {
        ...state,
        loading: action.payload.loading,
        isLogin: action.payload.isLogin,
      };
    },
  },
});

export const { setIdentity } = identitySlice.actions;
export default identitySlice.reducer;
