import React from 'react';

import { Container, Grid } from '@mui/material';

import Welcome from '../../components/Welcome';
import LastComments from '../../components/LastComments';
import Sidebar from '../../components/Sidebar';

const Entire = () => {
  return (
    <Container>
      <Grid
        container
        columnSpacing={5}
        rowSpacing={0}
        sx={{
          paddingTop: '20px',
          justifyContent: { xs: 'center', md: 'stretch' },
        }}
      >
        <Grid item xs={12} md={8}>
          <Welcome />
          <LastComments />
        </Grid>

        <Grid item md={4} sx={{ marginBottom: { xs: '2rem', md: 0 } }}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Entire;
