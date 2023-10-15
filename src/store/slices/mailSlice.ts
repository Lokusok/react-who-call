import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sendText } from '../thunks/mail/sendText';
import { setContactsIsSended } from '../thunks/mail/setContactsIsSended';

import { sendResetPassword } from '../thunks/mail/sendResetPassword';
import { setResetPasswordIsSended } from '../thunks/mail/setResetPasswordIsSended';

import { changePassword } from '../thunks/user/changePassword';

interface IMailSliceState {
  contacts: {
    isSended: boolean | null;
  };

  resetPassword: {
    isSended: boolean | null;
    userUndefined: boolean;
  };
}

const initialState: IMailSliceState = {
  contacts: {
    isSended: null,
  },
  resetPassword: {
    isSended: null,
    userUndefined: false,
  },
};

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendText.fulfilled, (state) => {
      state.contacts.isSended = true;
    });

    builder.addCase(
      setContactsIsSended.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.contacts.isSended = action.payload;
      }
    );

    builder.addCase(
      setResetPasswordIsSended.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.resetPassword.isSended = action.payload;
      }
    );

    builder.addCase(sendResetPassword.fulfilled, (state, action) => {
      state.resetPassword.isSended = true;
    });

    builder.addCase(sendResetPassword.rejected, (state, action) => {
      if (!action.payload) {
        return;
      }

      const errorType = action.payload.type;

      if (!errorType) {
        return;
      }

      switch (errorType) {
        case 'ALREADY_SENT':
          state.resetPassword.isSended = true;
        case 'USER_UNDEFINED':
          state.resetPassword.userUndefined = true;
      }
    });

    builder.addCase(changePassword.fulfilled, (state) => {
      state.resetPassword.isSended = false;
      state.resetPassword.userUndefined = false;
    });
  },
});

export default mailSlice.reducer;
