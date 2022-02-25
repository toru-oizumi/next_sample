import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'domain/model/user';

export type userState = {
  user?: User;
};

export const initialState: userState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => ({
      ...state,
      user: action.payload,
    }),
    resetUser: () => initialState,
  },
});
