import { createAsyncThunk } from '@reduxjs/toolkit';

import { StatusesStates } from '../../../types';

import {
  setResetPasswordStatus,
  setShowResetPasswordStatus,
} from '../../slices/statusesSlice';

interface SetResetPasswordThunkPayload {
  resetPasswordStatus: StatusesStates;
  showStatus: boolean;
}

export const setResetPassword = createAsyncThunk<
  void,
  SetResetPasswordThunkPayload
>(
  'statuses/setResetPassword',
  ({ resetPasswordStatus, showStatus }, { dispatch }) => {
    dispatch(setResetPasswordStatus(resetPasswordStatus));
    dispatch(setShowResetPasswordStatus(showStatus));

    setTimeout(() => {
      dispatch(setShowResetPasswordStatus(false));
    }, 3000);

    setTimeout(() => {
      dispatch(setResetPasswordStatus(StatusesStates.Default));
    }, 4000);
  }
);
