import React from 'react';

import { Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import VisibilityIcon from '@mui/icons-material/Visibility';

interface ViewsCountProps {
  count: number;
}

const ViewsCount: React.FC<ViewsCountProps> = ({ count }) => {
  return (
    <Grid container alignItems="center" spacing={0.3}>
      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <VisibilityIcon sx={{ color: grey[700] }} fontSize="small" />
      </Grid>

      <Grid item>
        <Typography sx={{ color: grey[700] }} fontSize={12}>
          {count}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ViewsCount;
