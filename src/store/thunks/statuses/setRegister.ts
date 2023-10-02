import { createAsyncThunk } from '@reduxjs/toolkit';

import { StatusesStates } from '../../../types';

import {
  setRegisterStatus,
  setShowRegisterStatus,
} from '../../slices/statusesSlice';

interface SetRegisterThunkPayload {
  registerStatus: StatusesStates;
  showStatus: boolean;
}

export const setRegister = createAsyncThunk<void, SetRegisterThunkPayload>(
  'statuses/setRegister',
  ({ registerStatus, showStatus }, { dispatch }) => {
    dispatch(setRegisterStatus(registerStatus));
    dispatch(setShowRegisterStatus(showStatus));

    setTimeout(() => {
      dispatch(setShowRegisterStatus(false));
    }, 3000);

    setTimeout(() => {
      dispatch(setRegisterStatus(StatusesStates.Default));
    }, 4000);
  }
);
