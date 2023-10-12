import { createAsyncThunk } from '@reduxjs/toolkit';

import { commentsAPI } from '../../../api';

import { setActive } from './setActive';
import { setNew } from './setNew';
import { searchTel } from '../tel/searchTel';

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
  async (payload, { dispatch }) => {
    await commentsAPI.post('/new', payload);
    await dispatch(setActive({ telId: payload.telId }));
    await dispatch(setNew({ limit: 10 }));

    await dispatch(searchTel({ telId: payload.telId }));
  }
);
