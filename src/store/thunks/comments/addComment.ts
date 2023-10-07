import { createAsyncThunk } from '@reduxjs/toolkit';

import { commentsAPI } from '../../../api';

import { CallTypesEnum } from '../../../types';

interface AddCommentProps {
  token: string | null;
  username: string;
  telId: number;
  description: string;
  type: CallTypesEnum;
  rating: number;
}

export const addComment = createAsyncThunk<void, AddCommentProps>(
  'comments/addComment',
  async (payload) => {
    await commentsAPI.post('/new', payload);
  }
);
