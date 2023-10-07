import React from 'react';

import { Typography, Stack, Alert, Skeleton } from '@mui/material';

import { INewComment } from '../../../types';

import NewComment from '../NewComment';

interface NewCommentsLineProps {
  newComments: INewComment[] | [] | null;
}

const NewCommentsLine: React.FC<NewCommentsLineProps> = ({ newComments }) => {
  if (!newComments) {
    return (
      <>
        <Skeleton
          variant="rectangular"
          width={150}
          height={20}
          sx={{ marginBottom: '1rem' }}
        />

        <Stack direction="column" spacing={2}>
          {new Array(10).fill(null).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={300}
              height={50}
            />
          ))}
        </Stack>
      </>
    );
  }

  return (
    <>
      <Typography sx={{ marginBottom: '0.5rem' }}>Новые отзывы</Typography>

      <Stack direction="column" spacing={2}>
        {!newComments ? (
          <Alert severity={'info'}>
            <Typography>Нет новых комментариев</Typography>
          </Alert>
        ) : (
          <>
            {newComments.map((comment) => (
              <NewComment
                key={comment.id}
                telNumber={comment.Tel.telNumber}
                telCommentsCount={comment.commentsCount}
                type={comment.type}
                description={comment.description}
              />
            ))}
          </>
        )}
      </Stack>
    </>
  );
};

export default NewCommentsLine;
