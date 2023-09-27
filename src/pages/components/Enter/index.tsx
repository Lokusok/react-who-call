import React from 'react';

import { Outlet } from 'react-router-dom';

import { Container, Box } from '@mui/material';

const Enter: React.FC = () => {
  return (
    <Container>
      <Box sx={{ paddingTop: '1.5rem' }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Enter;
