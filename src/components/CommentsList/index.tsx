import React from 'react';

import { Box, Typography, Stack } from '@mui/material';

import Comment from '../Comment';

import { IComment } from '../../types';

interface CommentsListProps {
  telNumber: string;
  comments: IComment[] | [] | null;
}

const CommentsList: React.FC<CommentsListProps> = ({ telNumber, comments }) => {
  return (
    <>
      <Box>
        <Typography fontSize={20} sx={{ marginBottom: '0.5rem' }}>
          Отзывы по номеру +7{telNumber}
        </Typography>
      </Box>

      {comments && (
        <Stack direction="column" spacing={2.5}>
          {comments.map((comment) => (
            <Box>
              <Comment
                id={comment.id}
                username={comment.username}
                description={comment.description}
                date={comment.date}
                time={comment.time}
                type={comment.type}
              />
            </Box>
          ))}
        </Stack>
      )}

      {comments && !comments.length && (
        <Typography>
          Комментариев пока нет. Будьте первым, кто оставит отзыв на этот номер!
        </Typography>
      )}
    </>
  );
};

export default CommentsList;
