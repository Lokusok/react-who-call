import { createAsyncThunk } from '@reduxjs/toolkit';

import { telAPI } from '../../../api';

interface IsValidProps {
  telNumber: string;
}

export const isValid = createAsyncThunk<boolean, IsValidProps>(
  'tel/isValid',
  async ({ telNumber }) => {
    try {
      const response = await telAPI.post('/is-valid', {
        telNumber,
      });

      return response.data;
    } catch (err) {
      return false;
    }
  }
);
