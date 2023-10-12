import { createAsyncThunk } from '@reduxjs/toolkit';

export const setContactsIsSended = createAsyncThunk<boolean>(
  'mail/setContactsIsSended',
  () => {
    const contactsSended = window.localStorage.getItem('contactsMailSended');

    if (contactsSended && JSON.parse(contactsSended)) {
      return true;
    } else {
      return false;
    }
  }
);
