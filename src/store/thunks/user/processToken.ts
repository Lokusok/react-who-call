import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLoggedIn, setUsername } from '../../slices/userSlice';
import { userAPI } from '../../../api';

interface ProcessTokenProps {
  token: string;
}

const processToken = createAsyncThunk<boolean, ProcessTokenProps>(
  'user/processToken',
  async ({ token }, { dispatch }) => {
    const response = await userAPI.post('/verify-jwt', {
      token,
    });

    const userData = response.data;

    if (userData.username) {
      dispatch(setLoggedIn(true));
      dispatch(setUsername(userData.username));
    }

    return Boolean(userData.username);
  }
);

export default processToken;
