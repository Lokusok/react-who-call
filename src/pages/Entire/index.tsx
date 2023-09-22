import React from 'react';

import { Container, Grid } from '@mui/material';

import Welcome from '../../components/Welcome';
import LastComments from '../../components/LastComments';

const Entire = () => {
  return (
    <Container>
      <Grid container sx={{ paddingTop: '15px' }}>
        <Grid item xs={12} md={9}>
          <Welcome />
          <LastComments />
        </Grid>

        <Grid item md={3}></Grid>
      </Grid>
    </Container>
  );
};

export default Entire;
