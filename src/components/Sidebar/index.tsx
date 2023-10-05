import React from 'react';

import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { newReviews } from '../../api/mock';

import RatingsColumn from './RatingsColumn';
import NewReviewsLine from './NewReviewsLine';

import { useAppSelector } from '../../store';

const Sidebar: React.FC = () => {
  const lastVerifiedTels = useAppSelector((state) => state.tel.lastVerified);
  const mostViwedTels = useAppSelector((state) => state.tel.mostViewed);
  const mostCommented = useAppSelector((state) => state.tel.mostCommented);

  const params = useParams();
  const { telNumber } = params;

  return (
    <Box sx={{ paddingTop: '1rem' }}>
      {telNumber ? (
        <NewReviewsLine newReviews={newReviews} />
      ) : (
        <RatingsColumn
          lastVerifiedTels={lastVerifiedTels}
          mostViewedTels={mostViwedTels}
          mostCommented={mostCommented}
        />
      )}
    </Box>
  );
};

export default Sidebar;
