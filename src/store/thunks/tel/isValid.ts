import { createAsyncThunk } from '@reduxjs/toolkit';

import { telAPI } from '../../../api';

interface IsValidProps {
  telNumber: string;
}

export const isValid = createAsyncThunk<boolean, IsValidProps>(
  'tel/isValid',
  async ({ telNumber }, thunkAPI) => {
    const response = await telAPI.post('isValid', {
      telNumber,
    });

    return response.data;
  }
);
