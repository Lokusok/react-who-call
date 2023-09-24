import React from 'react';

import { Box, Typography } from '@mui/material';

import Chart from './Chart';

interface ActivityProps {
  title: string;
}

const Activity: React.FC<ActivityProps> = ({ title }) => {
  return (
    <Box>
      <Typography
        fontSize={24}
        fontWeight={400}
        sx={{ marginBottom: '0.5rem' }}
      >
        {title}
      </Typography>

      <Box>
        <Chart />
      </Box>
    </Box>
  );
};

export default Activity;
