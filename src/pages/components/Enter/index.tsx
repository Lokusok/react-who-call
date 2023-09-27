import React from 'react';

import { Container, Box } from '@mui/material';

interface EnterProps {
  children: React.ReactNode;
}

const Enter: React.FC<EnterProps> = ({ children }) => {
  return (
    <Container>
      <Box sx={{ paddingTop: '1.5rem' }}>{children}</Box>
    </Container>
  );
};

export default Enter;
