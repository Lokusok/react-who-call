import React from 'react';

import { Box, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import { lastCheckedNumbers } from '../../api/mock';
import TelNumberLine from '../TelNumberLine';

import RatingComments from '../RatingComments';

const Sidebar: React.FC = () => {
  return (
    <Box sx={{ paddingTop: '1rem' }}>
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
    </Box>
  );
};

export default Sidebar;
