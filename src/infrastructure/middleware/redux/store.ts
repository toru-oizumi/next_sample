import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice, initialState as userState } from './slice/user';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const preloadedState = () => ({ user: userState });

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
