import { createAsyncThunk } from '@reduxjs/toolkit';

import { setMostViewed } from '../../slices/telSlice';

import { telAPI } from '../../../api';

const setViewed = createAsyncThunk('tel/setViewed', async (_, { dispatch }) => {
  const response = await telAPI.get('/get-most-viewed');

  dispatch(setMostViewed(response.data));
});

export default setViewed;