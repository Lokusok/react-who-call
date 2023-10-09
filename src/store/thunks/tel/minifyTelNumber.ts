import { createAsyncThunk } from '@reduxjs/toolkit';

import { telAPI } from '../../../api';

interface MinifyTelNumberProps {
  telNumber: string;
}

interface MinifyTelNumberReturnValue {
  minifiedTelNumber: string;
  isValid: boolean;
}

export const minifyTelNumber = createAsyncThunk<
  MinifyTelNumberReturnValue,
  MinifyTelNumberProps
>('tel/minifyTelNumber', async ({ telNumber }) => {
  const response = await telAPI.post('/minify-tel-number', { telNumber });

  return response.data;
});
