import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAPI } from '../../../api';

import { setResetPassword } from '../statuses/setResetPassword';

import { StatusesStates } from '../../../types';

interface ChangePasswordProps {
  newPassword: string;
  token: string;
}

export const changePassword = createAsyncThunk<void, ChangePasswordProps>(
  'user/changePassword',
  async ({ newPassword, token }, { dispatch }) => {
    await userAPI.post('/change-password', {
      newPassword,
      token,
    });

    window.localStorage.removeItem('resetPasswordMailSended');

    dispatch(
      setResetPassword({
        resetPasswordStatus: StatusesStates.Success,
        showStatus: true,
      })
    );
  }
);
