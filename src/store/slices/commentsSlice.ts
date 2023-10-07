import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IComment, INewComment } from '../../types';

interface ICommentsState {
  activeComments: IComment[] | [] | null;
  newComments: INewComment[] | [] | null;
}

const initialState: ICommentsState = {
  activeComments: null,
  newComments: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setActiveComments(state, action: PayloadAction<IComment[] | [] | null>) {
      state.activeComments = action.payload;
    },

    setNewComments(state, action: PayloadAction<INewComment[] | [] | null>) {
      state.newComments = action.payload;
    },
  },
});

export const { setActiveComments, setNewComments } = commentsSlice.actions;

export default commentsSlice.reducer;
