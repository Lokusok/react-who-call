import React from 'react';

import { Box, Typography } from '@mui/material';

interface InfoBlockProps {
  title: string;
  children: React.ReactNode;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, children }) => {
  return (
    <Box>
      <Typography
        fontSize={24}
        fontWeight={400}
        sx={{ marginBottom: '0.5rem' }}
      >
        {title}
      </Typography>

      <Typography fontSize={15}>{children}</Typography>
    </Box>
  );
};

export default InfoBlock;
