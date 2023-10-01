import React from 'react';

import { Outlet, useParams } from 'react-router-dom';

import { Container, Box } from '@mui/material';

import useScrollTop from '../../../hooks/useScrollTop';

const Enter: React.FC = () => {
  useParams(); // для ререндера при изменении параметров в url
  useScrollTop();

  return (
    <Container>
      <Box sx={{ paddingTop: '1.5rem' }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Enter;
