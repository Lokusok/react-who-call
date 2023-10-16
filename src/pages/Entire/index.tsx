import React from 'react';

import { Alert, Typography, Box, Skeleton, Stack } from '@mui/material';

import Welcome from '../../components/Welcome';
import LastComments from '../../components/LastComments';

import { setAll } from '../../store/thunks/comments/setAll';

import { useAppDispatch, useAppSelector } from '../../store';

const Entire: React.FC = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.all);

  const [page, setPage] = React.useState(1);
  const pagesCount = comments.count && Math.ceil(comments.count / 5);

  React.useEffect(() => {
    dispatch(setAll({ page }));
  }, [page]);

  const onChange = (_: any, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Welcome />

      {comments?.items?.length ? (
        <LastComments
          comments={comments}
          onChange={onChange}
          pagesCount={pagesCount as number}
          page={page}
        />
      ) : !comments.count && !comments.items ? (
        <Box sx={{ paddingTop: 2 }}>
          <Skeleton variant="rounded" width={250} height={30} />

          <Stack direction="column" spacing={2} sx={{ marginTop: 2 }}>
            <Skeleton variant="rounded" width="100%" height={100} />
            <Skeleton variant="rounded" width="100%" height={100} />
            <Skeleton variant="rounded" width="100%" height={100} />
            <Skeleton variant="rounded" width="100%" height={100} />
          </Stack>
        </Box>
      ) : (
        <Alert severity="info" sx={{ marginTop: 1.5 }}>
          <Typography fontSize={15}>Комментариев пока нет...</Typography>
        </Alert>
      )}
    </>
  );
};

export default Entire;
