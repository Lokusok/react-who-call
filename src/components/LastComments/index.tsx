import React from 'react';

import CommentsLine from './CommentsLine';

import { Typography, Box } from '@mui/material';

import Pagination from '../Pagination';
import { IComment, IAllComments } from '../../types';

interface LastCommentsProps {
  comments: IAllComments;
  onChange: (_: any, value: number) => void;
  pagesCount: number;
  page: number;
}

const LastComments: React.FC<LastCommentsProps> = ({
  comments,
  onChange,
  pagesCount,
  page,
}) => {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <Typography fontSize={19} fontWeight={400} sx={{ marginBottom: '8px' }}>
        Последние комментарии:
      </Typography>

      <CommentsLine comments={comments.items as IComment[]} />

      {pagesCount > 1 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
            marginBottom: '0.3rem',
          }}
        >
          <Pagination
            onChange={onChange}
            count={pagesCount as number}
            defaultPage={page}
          />
        </Box>
      )}
    </Box>
  );
};

export default LastComments;
