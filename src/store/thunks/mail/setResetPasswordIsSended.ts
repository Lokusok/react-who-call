import { createAsyncThunk } from '@reduxjs/toolkit';

export const setResetPasswordIsSended = createAsyncThunk<boolean>(
  'mail/setResetPasswordIsSended',
  () => {
    const resetPasswordSended = window.localStorage.getItem(
      'resetPasswordMailSended'
    );

    if (resetPasswordSended && JSON.parse(resetPasswordSended)) {
      return true;
    } else {
      return false;
    }
  }
);
