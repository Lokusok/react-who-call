import { createAsyncThunk } from '@reduxjs/toolkit';

import { mailAPI } from '../../../api';

interface SendTextProps {
  name: string;
  email: string;
  text: string;
  token: string;
}

export const sendText = createAsyncThunk<void, SendTextProps>(
  'mail/sendText',
  async ({ name, email, text, token }) => {
    await mailAPI.post('/send-text', {
      name,
      email,
      text,
      token,
    });

    window.localStorage.setItem('contactsMailSended', JSON.stringify(true));
  }
);
