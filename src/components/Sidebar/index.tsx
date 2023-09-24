import React from 'react';

import { useParams } from 'react-router-dom';

import { Box, Grid, Typography, Stack } from '@mui/material';

import { lastCheckedNumbers, newReviews } from '../../api/mock';

import RatingComments from '../RatingComments';
import NewReview from './NewReview';

const Sidebar: React.FC = () => {
  const params = useParams();
  const { telNumber } = params;

  return (
    <Box sx={{ paddingTop: '1rem' }}>
      {telNumber ? (
        <>
          <Typography sx={{ marginBottom: '0.5rem' }}>Новые отзывы</Typography>

          <Stack direction="column" spacing={2}>
            {newReviews.map((review) => (
              <NewReview
                telNumber={review.telNumber}
                category={review.category}
                commentsCount={review.commentsCount}
                reviewText={review.reviewText}
              />
            ))}
          </Stack>
        </>
      ) : (
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <RatingComments
              title="Последние проверенные телефоны"
              numbers={lastCheckedNumbers}
            />
          </Grid>

          <Grid item>
            <RatingComments
              title="Самые комментируемые"
              numbers={lastCheckedNumbers}
            />
          </Grid>

          <Grid item>
            <RatingComments
              title="Самые просматриваемые"
              numbers={lastCheckedNumbers}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Sidebar;
