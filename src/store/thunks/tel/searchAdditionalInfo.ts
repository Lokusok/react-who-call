import { createAsyncThunk } from '@reduxjs/toolkit';

import { setAdditionalInfo } from '../../slices/telSlice';

import { telAPI } from '../../../api';

interface SearchAdditionalInfoProps {
  telNumber: string;
}

export const searchAdditionalInfo = createAsyncThunk<
  void,
  SearchAdditionalInfoProps
>('tel/searchAdditionalInfo', async ({ telNumber }, { dispatch }) => {
  const response = await telAPI.get('/info', {
    params: {
      telNumber,
    },
  });

  const { region, operator } = response.data;

  dispatch(setAdditionalInfo({ region, operator }));
});
