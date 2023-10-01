import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLoggedIn, setUsername } from '../../slices/userSlice';
import { userAPI } from '../../../api';

interface ProcessTokenProps {
  token: string;
}

const processToken = createAsyncThunk<void, ProcessTokenProps>(
  'user/processToken',
  async ({ token }, { dispatch }) => {
    const response = await userAPI.post('/verify-jwt', {
      token,
    });

    console.log(response);
    const userData = response.data;

    if (userData.username) {
      dispatch(setLoggedIn(true));
      dispatch(setUsername(userData.username));
    }
  }
);

export default processToken;
