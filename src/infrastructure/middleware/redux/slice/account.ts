import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Account } from '@/domain/model/account';

export type accountState = {
  account?: Account;
};

export const initialState: accountState = {};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<Account>) => ({
      ...state,
      account: action.payload,
    }),
    resetAccount: () => initialState,
  },
});
