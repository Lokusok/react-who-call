import { createAsyncThunk } from '@reduxjs/toolkit';

import { commentsAPI } from '../../../api';

import { setNewComments } from '../../slices/commentsSlice';

interface SetNewProps {
  limit: number;
}

export const setNew = createAsyncThunk<void, SetNewProps>(
  'comments/setNew',
  async ({ limit }, { dispatch }) => {
    const response = await commentsAPI.get('/get-new-comments', {
      params: {
        limit,
      },
    });

    dispatch(setNewComments(response.data));
  }
);
