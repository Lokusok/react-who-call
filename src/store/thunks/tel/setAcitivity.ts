import { createAsyncThunk } from '@reduxjs/toolkit';

import { telAPI } from '../../../api';

import { TelActivity } from '../../../types';

interface SetActivityProps {
  telId: number;
}

export const setActivity = createAsyncThunk<TelActivity, SetActivityProps>(
  'tel/setActivity',
  async ({ telId }) => {
    const response = await telAPI.get('/get-activity', { params: { telId } });

    return response.data;
  }
);
