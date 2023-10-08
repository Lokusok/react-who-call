import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLastVerified } from '../../slices/telSlice';

import { telAPI } from '../../../api';

interface SetVerifiedProps {
  limit: number;
}

export const setVerified = createAsyncThunk<void, SetVerifiedProps>(
  'tel/setVerified',
  async ({ limit }, { dispatch }) => {
    const response = await telAPI.get('/get-last-verified', {
      params: {
        limit,
      },
    });

    dispatch(setLastVerified(response.data));
  }
);
