import React from 'react';

import { Typography, Alert } from '@mui/material';

interface ForgetSendErrorProps {
  children: React.ReactNode;
}

const ForgetSendError: React.FC<ForgetSendErrorProps> = ({ children }) => {
  return (
    <Alert severity="error">
      <Typography>{children}</Typography>
    </Alert>
  );
};

export default ForgetSendError;
