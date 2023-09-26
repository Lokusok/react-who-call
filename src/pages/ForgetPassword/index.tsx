import React from 'react';

import { Container, Box } from '@mui/material';

import ForgetForm from './ForgetForm';

const ForgetPassword: React.FC = () => {
  return (
    <Container>
      <Box sx={{ paddingTop: '1.5rem' }}>
        <ForgetForm />
      </Box>
    </Container>
  );
};

export default ForgetPassword;
