import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLastVerified } from '../../slices/telSlice';

import { telAPI } from '../../../api';

const setVerified = createAsyncThunk(
  'tel/setVerified',
  async (_, { dispatch }) => {
    const response = await telAPI.get('/get-last-verified');

    console.log({ response });
    dispatch(setLastVerified(response.data));
  }
);

export default setVerified;
