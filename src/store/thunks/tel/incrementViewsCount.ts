import { createAsyncThunk } from '@reduxjs/toolkit';

import { telAPI } from '../../../api';

import { ITel } from '../../../types';

interface IncrementViewsCountProps {
  telId: number;
}

export const incrementViewsCount = createAsyncThunk<
  ITel | void,
  IncrementViewsCountProps
>('tel/incrementViewsCount', async ({ telId }) => {
  const visitedStr = window.localStorage.getItem('visited');
  const visitedNumbersIds = JSON.parse(visitedStr || '{}');

  // если номер уже был посещён - не отправляем запрос на сервер
  if (visitedNumbersIds[telId]) {
    return;
  }

  try {
    const response = await telAPI.post<ITel>('/increment-views-count', {
      telId,
    });

    visitedNumbersIds[telId] = true;
    window.localStorage.setItem('visited', JSON.stringify(visitedNumbersIds));

    return response.data;
  } catch (err) {
    console.error(err);
  }
});
