import { createAsyncThunk } from '@reduxjs/toolkit';

import { StatusesStates } from '../../../types';

import { setLoginStatus, setShowLoginStatus } from '../../slices/statusesSlice';

interface SetLoginThunkPayload {
  loginStatus: StatusesStates;
  showStatus: boolean;
}

export const setLogin = createAsyncThunk<void, SetLoginThunkPayload>(
  'statuses/setLogin',
  ({ loginStatus, showStatus }, { dispatch }) => {
    dispatch(setLoginStatus(loginStatus));
    dispatch(setShowLoginStatus(showStatus));

    setTimeout(() => {
      dispatch(setShowLoginStatus(false));
    }, 3000);

    setTimeout(() => {
      dispatch(setLoginStatus(StatusesStates.Default));
    }, 4000);
  }
);
