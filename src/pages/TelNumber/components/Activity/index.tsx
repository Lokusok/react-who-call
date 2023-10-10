import React from 'react';

import { Box, Typography } from '@mui/material';

import Chart from './Chart';

import { TelActivity } from '../../../../types';

interface ActivityProps {
  title: string;
  activity: TelActivity;
}

const Activity: React.FC<ActivityProps> = ({ title, activity }) => {
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
        <Chart activity={activity} />
      </Box>
    </Box>
  );
};

export default Activity;
