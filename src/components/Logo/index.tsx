import React from 'react';

import { Box } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

const Logo: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        columnGap: '10px',
        transition: 'opacity ease .2s',
        '&:hover': { opacity: 0.8 },
        '&:active': { opacity: 0.5 },
      }}
    >
      <Box
        sx={{
          width: '27px',
          height: '27px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: '50%',
        }}
      >
        <CallIcon fontSize="small" color="primary" />
      </Box>
      Позвонили
    </Box>
  );
};

export default Logo;
