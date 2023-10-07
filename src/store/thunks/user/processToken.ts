import { createAsyncThunk } from '@reduxjs/toolkit';

import { setUserId, setLoggedIn, setUsername } from '../../slices/userSlice';
import { userAPI } from '../../../api';

interface ProcessTokenProps {
  token: string;
}

const processToken = createAsyncThunk<boolean, ProcessTokenProps>(
  'user/processToken',
  async ({ token }, { dispatch }) => {
    try {
      const response = await userAPI.post('/verify-jwt', {
        token,
      });

      const { id: userId, username } = response.data;

      dispatch(setUserId(userId));
      dispatch(setLoggedIn(true));
      dispatch(setUsername(username));

      return true;
    } catch (err) {
      dispatch(setLoggedIn(false));

      return false;
    }
  }
);

export default processToken;
