import React from 'react';

import { Container, Box } from '@mui/material';

import RegisterForm from './RegisterForm';

const Register: React.FC = () => {
  return (
    <Container>
      <Box sx={{ paddingTop: '1.5rem' }}>
        <RegisterForm />
      </Box>
    </Container>
  );
};

export default Register;
