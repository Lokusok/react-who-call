import { createAsyncThunk } from '@reduxjs/toolkit';
import { telAPI } from '../../../api';

import { setFormats } from '../../slices/telSlice';

interface StandartifyFormatsProps {
  telNumber: string;
}

export const standartifyFormats = createAsyncThunk<
  void,
  StandartifyFormatsProps
>('tel/standartifyFormats', async ({ telNumber }, { dispatch }) => {
  const response = await telAPI.post('/standartify', {
    telNumber,
  });

  if (response.status === 200) {
    dispatch(setFormats(response.data));
  }
});
