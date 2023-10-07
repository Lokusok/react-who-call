import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IComment } from '../../types';

interface ICommentsState {
  activeComments: IComment[] | [] | null;
}

const initialState: ICommentsState = {
  activeComments: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setActiveComments(state, action: PayloadAction<IComment[] | [] | null>) {
      state.activeComments = action.payload;
    },
  },
});

export const { setActiveComments } = commentsSlice.actions;

export default commentsSlice.reducer;
