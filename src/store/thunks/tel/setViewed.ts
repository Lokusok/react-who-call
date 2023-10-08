import { createAsyncThunk } from '@reduxjs/toolkit';

import { setMostViewed } from '../../slices/telSlice';

import { telAPI } from '../../../api';

interface SetViewedProps {
  limit: number;
}

export const setViewed = createAsyncThunk<void, SetViewedProps>(
  'tel/setViewed',
  async ({ limit }, { dispatch }) => {
    const response = await telAPI.get('/get-most-viewed', {
      params: {
        limit,
      },
    });

    dispatch(setMostViewed(response.data));
  }
);
