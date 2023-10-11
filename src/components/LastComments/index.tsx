import React from 'react';

import CommentsLine from './CommentsLine';

import { Typography, Box, Skeleton, Stack } from '@mui/material';

import { setAll } from '../../store/thunks/comments/setAll';
import { useAppDispatch, useAppSelector } from '../../store';

import Pagination from '../Pagination';
import { IComment } from '../../types';

const LastComments: React.FC = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.all);
  const [page, setPage] = React.useState(1);
  const pagesCount = comments.count && Math.ceil(comments.count / 5);

  React.useEffect(() => {
    console.log({ page });
    dispatch(setAll({ page }));
  }, [page]);

  const onChange = (_: any, value: number) => {
    setPage(value);
  };

  if (!comments.count && !comments.items) {
    return (
      <Box sx={{ paddingTop: 2 }}>
        <Skeleton variant="rounded" width={250} height={30} />

        <Stack direction="column" spacing={2} sx={{ marginTop: 2 }}>
          <Skeleton variant="rounded" width="100%" height={100} />
          <Skeleton variant="rounded" width="100%" height={100} />
          <Skeleton variant="rounded" width="100%" height={100} />
          <Skeleton variant="rounded" width="100%" height={100} />
        </Stack>
      </Box>
    );
  }

  return (
    <Box sx={{ paddingTop: 2 }}>
      <Typography fontSize={19} fontWeight={400} sx={{ marginBottom: '8px' }}>
        Последние комментарии:
      </Typography>

      <CommentsLine comments={comments.items as IComment[]} />

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
    </Box>
  );
};

export default LastComments;
