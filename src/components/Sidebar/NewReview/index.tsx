import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Box, Stack, Link, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import CommentsCount from '../../CommentsCount';

interface NewReviewProps {
  telNumber: string;
  category: string | null;
  commentsCount: number;
  reviewText: string;
}

const NewReview: React.FC<NewReviewProps> = ({
  telNumber,
  category,
  commentsCount,
  reviewText,
}) => {
  return (
    <Box sx={{ border: `1px solid ${grey[400]}`, borderRadius: '5px' }}>
      <Box
        sx={{
          padding: '0.5rem 0.7rem',
          borderBottom: `1px solid ${grey[400]}`,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Link
              component={RouterLink}
              to={`/tel/${telNumber}`}
              color="primary"
              underline="hover"
              fontSize={13}
            >
              {telNumber}
            </Link>

            <Typography color={grey[400]} fontSize={13}>
              {category}
            </Typography>
          </Stack>

          <CommentsCount count={commentsCount} />
        </Stack>
      </Box>

      <Box sx={{ padding: '0.5rem 0.7rem' }}>
        <Typography fontSize={13}>{reviewText}</Typography>
      </Box>
    </Box>
  );
};

export default NewReview;
