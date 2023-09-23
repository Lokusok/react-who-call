import React from 'react';

import { Container, Grid } from '@mui/material';

import Welcome from '../../components/Welcome';
import LastComments from '../../components/LastComments';
import Sidebar from '../../components/Sidebar';

const Entire = () => {
  return (
    <Container>
      <Grid container spacing={5} sx={{ paddingTop: '20px' }}>
        <Grid item xs={12} md={8}>
          <Welcome />
          <LastComments />
        </Grid>

        <Grid item md={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Entire;
