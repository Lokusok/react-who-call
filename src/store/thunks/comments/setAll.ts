import { createAsyncThunk } from '@reduxjs/toolkit';

import { commentsAPI } from '../../../api';

import { IAllComments } from '../../../types';

interface SetAllProps {
  page: number;
}

export const setAll = createAsyncThunk<IAllComments, SetAllProps>(
  'comments/setAll',
  async ({ page }) => {
    const response = await commentsAPI.get('/get-all-comments', {
      params: { page },
    });

    return response.data;
  }
);
