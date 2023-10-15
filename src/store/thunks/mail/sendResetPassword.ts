import { createAsyncThunk } from '@reduxjs/toolkit';

import { AxiosError } from 'axios';

import { mailAPI } from '../../../api';

interface SendResetPasswordProps {
  email: string;
}

export interface SendResetPasswordRejectedValue {
  status: string;
  type: string;
}

export const sendResetPassword = createAsyncThunk<
  void,
  SendResetPasswordProps,
  { rejectValue: SendResetPasswordRejectedValue }
>('mail/sendResetPassword', async ({ email }, thunkAPI) => {
  try {
    await mailAPI.post<{ type: string }>('/reset-password', { email });

    window.localStorage.setItem(
      'resetPasswordMailSended',
      JSON.stringify(true)
    );
  } catch (err: any) {
    let error: AxiosError<SendResetPasswordRejectedValue> = err;

    if (!error.response) {
      return;
    }

    if (error.response.data.type === 'ALREADY_SENT') {
      window.localStorage.setItem(
        'resetPasswordMailSended',
        JSON.stringify(true)
      );
    }

    return thunkAPI.rejectWithValue(error.response.data);
  }
});
