import React from 'react';

import { Snackbar, Alert, AlertColor } from '@mui/material';

interface StatusProps {
  open: boolean;
  severity: AlertColor;
  children: React.ReactNode;
}

const Status: React.FC<StatusProps> = ({ open, severity, children }) => {
  return (
    <Snackbar open={open}>
      <Alert severity={severity} sx={{ width: '100%' }}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default Status;
