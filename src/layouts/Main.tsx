import React from 'react';

import { useParams, Outlet } from 'react-router-dom';

import { Container, Grid } from '@mui/material';

import Sidebar from '../components/Sidebar';

import useScrollTop from '../hooks/useScrollTop';
import useRedirectOnActiveTelNumber from '../hooks/useRedirectOnActiveTelNumber';

const Main: React.FC = () => {
  const params = useParams();
  const { telNumber } = params;

  useScrollTop();
  useRedirectOnActiveTelNumber();

  return (
    <Container component="main">
      <Grid
        container
        columnSpacing={5}
        rowSpacing={3}
        sx={{
          paddingTop: '20px',
          justifyContent: { xs: 'center', md: 'stretch' },
        }}
      >
        <Grid item xs={12} md={8} lg={telNumber ? 9 : 8}>
          <Outlet />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={telNumber ? 3 : 4}
          sx={{ marginBottom: { xs: '2rem', md: 0 } }}
        >
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
