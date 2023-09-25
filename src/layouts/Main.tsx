import React from 'react';

import { useParams, Outlet } from 'react-router-dom';

import { Container, Grid } from '@mui/material';

import Sidebar from '../components/Sidebar';

const Main: React.FC = () => {
  const params = useParams();
  const { telNumber } = params;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container component="main">
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
