import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLastVerified } from '../../slices/telSlice';

import { telAPI } from '../../../api';

export const setVerified = createAsyncThunk(
  'tel/setVerified',
  async (_, { dispatch }) => {
    const response = await telAPI.get('/get-last-verified');

    dispatch(setLastVerified(response.data));
  }
);
