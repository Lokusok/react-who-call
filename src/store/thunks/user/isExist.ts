import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAPI } from '../../../api';

interface IsExistProps {
  username: string;
}

export const isExist = createAsyncThunk<boolean, IsExistProps>(
  'user/isExist',
  async ({ username }) => {
    const response = await userAPI.get<boolean>('/is-exist', {
      params: { username },
    });

    return response.data;
  }
);
