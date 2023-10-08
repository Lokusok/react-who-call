import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITel } from '../../../types';

import { telAPI } from '../../../api';

import { standartifyFormats } from './standartifyFormats';

interface SearchTelAndSetProps {
  telNumber?: string;
  telId?: number;
}

export const searchTel = createAsyncThunk<ITel, SearchTelAndSetProps>(
  'tel/searchTelAndSet',
  async ({ telNumber, telId }, { dispatch }) => {
    const response = await telAPI.post('/search', { search: telNumber, telId });

    if (response.data) {
      const resTelNumber = response.data.telNumber;
      dispatch(standartifyFormats({ telNumber: resTelNumber }));
    }

    return response.data;
  }
);
