import React from 'react';

import { Typography, Stack } from '@mui/material';

import { INewReview } from '../../../types';

import NewReview from '../NewReview';

interface NewReviewsLineProps {
  newReviews: INewReview[];
}

const NewReviewsLine: React.FC<NewReviewsLineProps> = ({ newReviews }) => {
  return (
    <>
      <Typography sx={{ marginBottom: '0.5rem' }}>Новые отзывы</Typography>

      <Stack direction="column" spacing={2}>
        {newReviews.map((review) => (
          <NewReview
            key={review.id}
            telNumber={review.telNumber}
            category={review.category}
            commentsCount={review.commentsCount}
            reviewText={review.reviewText}
          />
        ))}
      </Stack>
    </>
  );
};

export default NewReviewsLine;
