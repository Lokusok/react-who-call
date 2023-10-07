import { createAsyncThunk } from '@reduxjs/toolkit';

import { commentsAPI } from '../../../api';

interface isHasCommentProps {
  userId: number;
  telId: number;
}

export const isHasComment = createAsyncThunk<boolean, isHasCommentProps>(
  'comments/isHasComments',
  async ({ userId, telId }) => {
    const response = await commentsAPI.get<boolean>(
      '/get-comment-for-telnumber',
      {
        params: {
          userId,
          telId,
        },
      }
    );

    console.log({ isCommented: response.data });

    return response.data;
  }
);
