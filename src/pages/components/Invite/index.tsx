import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Box, Typography, Link } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)`
  padding: 12px 20px;
  border: 1px solid ${grey[300]};
  max-width: 500px;
  margin: 0 auto;
  margin-top: 1.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface InviteProps {
  children: React.ReactNode;
}

const Invite: React.FC<InviteProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Invite;
