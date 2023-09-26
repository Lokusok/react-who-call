import React from 'react';

import { Container, Box } from '@mui/material';

import LoginForm from './LoginForm';

const Login: React.FC = () => {
  return (
    <Container>
      <Box sx={{ paddingTop: '1.5rem' }}>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default Login;
