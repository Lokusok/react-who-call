import { createAsyncThunk } from '@reduxjs/toolkit';

import { StatusesStates } from '../../../types';

import {
  setLogoutStatus,
  setShowLogoutStatus,
} from '../../slices/statusesSlice';

interface SetLogoutThunkPayload {
  logoutStatus: StatusesStates;
  showStatus: boolean;
}

export const setLogout = createAsyncThunk<void, SetLogoutThunkPayload>(
  'statuses/setLogin',
  ({ logoutStatus, showStatus }, { dispatch }) => {
    dispatch(setLogoutStatus(logoutStatus));
    dispatch(setShowLogoutStatus(showStatus));

    setTimeout(() => {
      dispatch(setShowLogoutStatus(false));
    }, 3000);

    setTimeout(() => {
      dispatch(setLogoutStatus(StatusesStates.Default));
    }, 4000);
  }
);
