import React from 'react';

import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)`
  max-width: 500px;
  margin: 0 auto;
`;

const ForgetPassword: React.FC = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default ForgetPassword;
