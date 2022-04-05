/* eslint-disable no-param-reassign */
import { createSlice, Slice } from '@reduxjs/toolkit';

type ISlice = {
  isLoading: boolean;
  user: any;
};

export const initialUserState = {
  isLoading: false,
  user: null,
};

export const userSlice: Slice<ISlice> = createSlice({
  name: 'store',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    getUser: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setUser, getUser } = userSlice.actions;
export default userSlice.reducer;
