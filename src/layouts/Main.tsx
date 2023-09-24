import React from 'react';

import { useParams } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

import { Container, Grid } from '@mui/material';

import Sidebar from '../components/Sidebar';

const Main: React.FC = () => {
  const params = useParams();
  const { telNumber } = params;

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
        <Grid item xs={12} md={telNumber ? 9 : 8}>
          <Outlet />
        </Grid>

        <Grid
          item
          md={telNumber ? 3 : 4}
          sx={{ marginBottom: { xs: '2rem', md: 0 } }}
        >
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
