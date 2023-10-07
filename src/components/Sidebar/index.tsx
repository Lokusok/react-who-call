import React from 'react';

import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import RatingsColumn from './RatingsColumn';
import NewCommentsLine from './NewCommentsLine';

import { useAppSelector } from '../../store';

const Sidebar: React.FC = () => {
  const lastVerifiedTels = useAppSelector((state) => state.tel.lastVerified);
  const mostViwedTels = useAppSelector((state) => state.tel.mostViewed);
  const mostCommented = useAppSelector((state) => state.tel.mostCommented);
  const newComments = useAppSelector((state) => state.comments.newComments);

  const params = useParams();
  const { telNumber } = params;

  return (
    <Box sx={{ paddingTop: '1rem' }}>
      {telNumber ? (
        <NewCommentsLine newComments={newComments} />
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
