import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import user from './slices/userSlice';
import status from './slices/statusesSlice';
import tel from './slices/telSlice';

const store = configureStore({
  reducer: {
    user,
    status,
    tel,
  },
});

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
