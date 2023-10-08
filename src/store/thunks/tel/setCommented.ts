import { createAsyncThunk } from '@reduxjs/toolkit';

import { setMostCommented } from '../../slices/telSlice';

import { telAPI } from '../../../api';

interface SetCommentedProps {
  limit: number;
}

export const setCommented = createAsyncThunk<void, SetCommentedProps>(
  'tel/setCommented',
  async ({ limit }, { dispatch }) => {
    const response = await telAPI.get('/get-most-commented', {
      params: {
        limit,
      },
    });

    dispatch(setMostCommented(response.data));
  }
);
