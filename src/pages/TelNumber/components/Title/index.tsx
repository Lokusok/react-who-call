import React from 'react';

import { Typography } from '@mui/material';

interface TitleProps {
  telNumber: string;
}

const Title: React.FC<TitleProps> = ({ telNumber }) => {
  return (
    <Typography
      component="h2"
      fontSize={28}
      fontWeight={400}
      sx={{ marginBottom: '0.5rem' }}
    >
      +7{telNumber} - кто звонил?
    </Typography>
  );
};

export default Title;
