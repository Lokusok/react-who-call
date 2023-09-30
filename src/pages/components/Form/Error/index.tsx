import React from 'react';

import { Typography } from '@mui/material';

interface ErrorProps {
  children: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => {
  return (
    <Typography sx={{ textDecoration: 'underline' }}>{children}</Typography>
  );
};

export default Error;
