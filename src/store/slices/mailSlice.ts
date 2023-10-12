import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sendText } from '../thunks/mail/sendText';
import { setContactsIsSended } from '../thunks/mail/setContactsIsSended';

interface IMailSliceState {
  contacts: {
    isSended: boolean | null;
  };
}

const initialState: IMailSliceState = {
  contacts: {
    isSended: null,
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
  },
});

export default mailSlice.reducer;
