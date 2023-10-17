import React from 'react';

import { Grid } from '@mui/material';

import Comment from '../../Comment';

import { IComment } from '../../../types';

interface CommentsLineProps {
  comments: IComment[];
}

const CommentsLine: React.FC<CommentsLineProps> = ({ comments }) => {
  return (
    <>
      <Grid container direction="column" spacing={2.5}>
        {comments.map((commData) => (
          <Grid item key={commData.id}>
            <Comment {...commData} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CommentsLine;
