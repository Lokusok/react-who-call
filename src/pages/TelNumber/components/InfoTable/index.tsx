import React from 'react';

import { Box } from '@mui/material';

import TelNumberTable from '../../../../components/TelNumberTable';

interface InfoTableProps {
  rating: number;
  viewsCount: number;
}

const InfoTable: React.FC<InfoTableProps> = ({ rating, viewsCount }) => {
  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <TelNumberTable rating={rating} viewsCount={viewsCount} />
    </Box>
  );
};

export default InfoTable;
