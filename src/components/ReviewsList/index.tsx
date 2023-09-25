import React from 'react';

import { Box, Typography, Stack } from '@mui/material';

import Comment from '../Comment';

import { mockReviews } from '../../api/mock';

interface ReviewsListProps {
  telNumber: string;
}

const ReviewsList: React.FC<ReviewsListProps> = ({ telNumber }) => {
  const reviews = mockReviews[telNumber];

  return (
    <>
      <Box>
        <Typography fontSize={20} sx={{ marginBottom: '0.5rem' }}>
          Отзывы по номеру +7{telNumber}
        </Typography>
      </Box>

      {reviews && (
        <Stack direction="column" spacing={2.5}>
          {reviews.map((review) => (
            <Box>
              <Comment
                username={review.username}
                description={review.description}
                date={review.date}
                time={review.time}
                category={review.category}
              />
            </Box>
          ))}
        </Stack>
      )}

      {!reviews && (
        <Typography>
          Комментариев пока нет. Будьте первым, кто оставит отзыв на этот номер!
        </Typography>
      )}
    </>
  );
};

export default ReviewsList;
