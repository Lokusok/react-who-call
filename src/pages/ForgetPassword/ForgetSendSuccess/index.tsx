import React from 'react';

import { Typography, Alert } from '@mui/material';

interface ForgetSendSuccessProps {
  children: React.ReactNode;
}

const ForgetSendSuccess: React.FC<ForgetSendSuccessProps> = ({ children }) => {
  return (
    <Alert severity="success">
      <Typography>{children}</Typography>
    </Alert>
  );
};

export default ForgetSendSuccess;
