import { createAsyncThunk } from '@reduxjs/toolkit';

import { UniqueUserFields } from '../../../types';

import { userAPI } from '../../../api';

interface IUserUniqueCheck {
  type: UniqueUserFields;
  value: string;
}

export const checkUnique = createAsyncThunk<boolean, IUserUniqueCheck>(
  'user/checkUnique',
  async (uniqueField) => {
    const response = await userAPI.post('/check-unique', {
      type: uniqueField.type,
      value: uniqueField.value,
    });

    return response.data;
  }
);
