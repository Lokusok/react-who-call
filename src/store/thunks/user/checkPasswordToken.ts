import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAPI } from '../../../api';

interface CheckPasswordProps {
  token: string;
}

interface CheckPasswordResponseReturnValue {
  status: boolean;
}

export const checkPasswordToken = createAsyncThunk<boolean, CheckPasswordProps>(
  'user/checkPassword',
  async ({ token }) => {
    const response = await userAPI.post<CheckPasswordResponseReturnValue>(
      '/check-exist-by-token',
      {
        token,
      }
    );

    return response.data.status;
  }
);
