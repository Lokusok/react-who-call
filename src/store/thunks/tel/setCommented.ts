import { createAsyncThunk } from '@reduxjs/toolkit';

import { setMostCommented } from '../../slices/telSlice';

import { telAPI } from '../../../api';

const setCommented = createAsyncThunk(
  'tel/setCommented',
  async (_, { dispatch }) => {
    const response = await telAPI.get('/get-most-commented');

    console.log({ mostCommented: response.data });
    dispatch(setMostCommented(response.data));
  }
);

export default setCommented;
