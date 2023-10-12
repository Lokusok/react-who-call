import { createAsyncThunk } from '@reduxjs/toolkit';

import { mailAPI } from '../../../api';

interface SendTextProps {
  name: string;
  email: string;
  text: string;
}

export const sendText = createAsyncThunk<void, SendTextProps>(
  'mail/sendText',
  async ({ name, email, text }) => {
    await mailAPI.post('/send-text', {
      name,
      email,
      text,
    });

    window.localStorage.setItem('contactsMailSended', JSON.stringify(true));
  }
);
