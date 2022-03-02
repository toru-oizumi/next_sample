import { configureStore } from '@reduxjs/toolkit';
import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';

import { accountSlice, initialState as accountState } from './slice/account';

const rootReducer = combineReducers({
  account: accountSlice.reducer,
});

const preloadedState = () => ({ account: accountState });

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });

export const reduxStore = createStore();
