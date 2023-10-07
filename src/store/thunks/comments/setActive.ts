import { createAsyncThunk } from '@reduxjs/toolkit';

import { commentsAPI } from '../../../api';

import { setActiveComments } from '../../slices/commentsSlice';

interface SetActiveProps {
  telId: number;
}

export const setActive = createAsyncThunk<void, SetActiveProps>(
  'comments/setActive',
  async ({ telId }, { dispatch }) => {
    const response = await commentsAPI.get('/get-all-comments-for-telnumber', {
      params: {
        telId,
      },
    });

    console.log({ comments: response.data });

    dispatch(setActiveComments(response.data));
  }
);
