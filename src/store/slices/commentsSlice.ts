import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IComment, INewComment, IAllComments } from '../../types';

import { setAll } from '../thunks/comments/setAll';

interface ICommentsState {
  activeComments: IComment[] | [] | null;
  newComments: INewComment[] | [] | null;
  all: IAllComments;
}

const initialState: ICommentsState = {
  activeComments: null,
  newComments: null,
  all: {
    count: null,
    items: null,
  },
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

  extraReducers: (builder) => {
    builder.addCase(
      setAll.fulfilled,
      (state, action: PayloadAction<IAllComments>) => {
        state.all = action.payload;
      }
    );
  },
});

export const { setActiveComments, setNewComments } = commentsSlice.actions;

export default commentsSlice.reducer;
