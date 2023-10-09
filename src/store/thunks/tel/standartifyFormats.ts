import { createAsyncThunk } from '@reduxjs/toolkit';
import { telAPI } from '../../../api';

import { setFormats } from '../../slices/telSlice';

interface StandartifyFormatsProps {
  telNumber: string;
}

interface StandartifyFormatsReturnedValue {
  internationalFormat: string;
  nationalFormat: string;
}

export const standartifyFormats = createAsyncThunk<
  StandartifyFormatsReturnedValue,
  StandartifyFormatsProps
>('tel/standartifyFormats', async ({ telNumber }, { dispatch }) => {
  const response = await telAPI.post('/standartify', {
    telNumber,
  });

  if (response.status === 200) {
    dispatch(setFormats(response.data));
  }

  return response.data;
});
